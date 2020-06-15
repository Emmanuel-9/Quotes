import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';




@Component({
  selector: 'app-quotesdetails',
  templateUrl: './quotesdetails.component.html',
  styleUrls: ['./quotesdetails.component.css']
})
export class QuotesdetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  deleteQuote(complete:boolean){
    this.isDelete.emit(complete)
  }
  
  
  
  likeButtonClick(){
     this.quote.likes++;
  }
  
  dislikeButtonClick(){
     this.quote.dislikes++;
  }   
  
  
  constructor() { }
  ngOnInit() {
  }
  

}
