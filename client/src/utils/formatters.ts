export function currencyFormatter(currency, sign) {
    if(isNaN(Number(currency))) return sign + " 0.00"
    const c = Number(currency)
    var sansDec = c.toFixed(2)
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return sign + ` ${formatted}`;
}

export function percentFormatter(currency, sign) {
    var sansDec = currency.toFixed(2);
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return ` ${formatted}` + sign;
}

export function mcFormatter(currency, sign){
    if(isNaN(Number(currency))){
        return sign + ' 0.00'
    }
    const c = Number(currency)
    var sansDec = (c / 1000000).toFixed(2)
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return sign + ` ${formatted}`;
}

export function mcLFormatter(currency, sign){
    if(isNaN(Number(currency))){
        return '0.00 '+ sign
    }
    const c = Number(currency)
    var sansDec = (c / 1000000).toFixed(2)
    var formatted = sansDec.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${formatted} ` + sign;
}

export function cellStyle(params){
    if(params.value > 0){
        return {color: '#7ACC79', textAlign:'right'}
    }else{
        return {color: '#F9644D', textAlign: 'right'}
    }
}

export function rightAlignRender(params){
    return {textAlign: 'right'}
}

export function centerRender(params){
    return {textAlign: 'center'}
}