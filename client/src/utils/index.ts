export * from './logger';
declare let API_HOST: string;
export const getEndpointUrl = (endpoint: string): string => {
    let endpointUrl: string;
    if (API_HOST) {
        if (API_HOST.includes('wss:')) {
            endpointUrl = API_HOST.replace(/wss?:\/\//, 'https://');
        } else {
            endpointUrl = API_HOST.replace(/ws?:\/\//, 'http://');
        }
    } else {
        endpointUrl = 'https://' + location.hostname + '/gwf/';
    }

    return endpointUrl.concat(endpoint);
};

export const downloadFile = (blobData, fileName: string) => {
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';

    const blob = new Blob([blobData], { type: 'application/octet-stream' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};
