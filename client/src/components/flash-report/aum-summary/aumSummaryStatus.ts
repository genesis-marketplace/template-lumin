import {observable} from "@microsoft/fast-element";

export class AumSummaryStatus{
    eGui: HTMLElement
    params: any;
    commitment: HTMLElement
    capitalCalled: HTMLElement
    unfundedCommitment: HTMLElement
    percentCalled: HTMLElement

    init(params){
        this.params = params
        this.eGui = document.createElement('div')
        this.eGui.className='ag-status-name-value'
        this.eGui.setAttribute('style','margin-top:-5px;')

        let commitmentLabel = document.createElement('span');
        commitmentLabel.style.paddingRight = "5px"
        commitmentLabel.style.fontWeight = "bold"
        let capitalCalledLabel = document.createElement('span');
        capitalCalledLabel.style.paddingRight = "5px"
        capitalCalledLabel.style.fontWeight = "bold"
        let unfundedCommitmentLabel = document.createElement('span');
        unfundedCommitmentLabel.style.paddingRight = "5px"
        unfundedCommitmentLabel.style.fontWeight = "bold"
        let percentCalledLabel = document.createElement('span');
        percentCalledLabel.style.paddingRight = "5px"
        percentCalledLabel.style.fontWeight = "bold"

        commitmentLabel.innerText ='Total Commitment: '
        capitalCalledLabel.innerText ='Total Capital Called/Deployed: '
        unfundedCommitmentLabel.innerText ='Total Unfunded Commitment: '
        percentCalledLabel.innerText ='Total % Called: '

        this.commitment = document.createElement('span');
        this.commitment.className = 'ag-status-name-value-value';
        this.commitment.setAttribute('style', 'margin-right:5%;');
        this.capitalCalled = document.createElement('span');
        this.capitalCalled.className = 'ag-status-name-value-value';
        this.capitalCalled.setAttribute('style', 'margin-right:5%;');
        this.unfundedCommitment = document.createElement('span');
        this.unfundedCommitment.className = 'ag-status-name-value-value';
        this.unfundedCommitment.setAttribute('style', 'margin-right:5%;');
        this.percentCalled = document.createElement('span');
        this.percentCalled.className = 'ag-status-name-value-value';
        this.percentCalled.setAttribute('style', 'margin-right:5%;');

        this.eGui.append(commitmentLabel)
        this.eGui.append(this.commitment)
        this.eGui.append(capitalCalledLabel)
        this.eGui.append(this.capitalCalled)
        this.eGui.append(unfundedCommitmentLabel)
        this.eGui.append(this.unfundedCommitment)
        this.eGui.append(percentCalledLabel)
        this.eGui.append(this.percentCalled)

        params.api.addEventListener('modelUpdated', this.onModelChange.bind(this));
    }

    getGui(){
        return this.eGui
    }

    destroy(){
        this.params.api.removeEventListener('gridReady', this.onModelChange);
    }

    onModelChange(){

        let com = 0;
        let ccal = 0
        let ucom =0
        let pcall = 0

        this.params.api.forEachNode((node) =>{
            if(node.data){
                com += Number(node.data.COMMITMENT)
                ccal += Number(node.data.CAPITAL_CALLED)
                ucom += Number(node.data.UNFUNDED_COMMITMENT)
                if(com != 0 ){
                    pcall = (ccal / com ) * 100
                }

            }
        })
        this.commitment.innerText = com.toLocaleString()+''
        this.capitalCalled.innerText = ccal.toLocaleString() +''
        this.unfundedCommitment.innerText = ucom.toLocaleString()+''
        this.percentCalled.innerText = pcall.toLocaleString()+' %'
    }
}