import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotesform',
  templateUrl: './quotesform.component.html',
  styleUrls: ['./quotesform.component.css']
})
export class QuotesformComponent implements OnInit {
  newQuote = new Quote('','','',new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit():void {
  }

}
