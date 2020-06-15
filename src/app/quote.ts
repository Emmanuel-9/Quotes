export class Quote {
    showDetails: boolean;
    constructor(public id: number,public name: string, public author: string, public editor: string,public entryDate: Date,public likes: number,public dislikes: number){
        this.showDetails=false;
    }
    
}
