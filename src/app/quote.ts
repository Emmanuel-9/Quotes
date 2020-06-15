export class Quote {
    showDetails: boolean;
    constructor(public name: string, public author: string, public editor: string,public entryDate: Date){
        this.showDetails=false;
    }
    
}
