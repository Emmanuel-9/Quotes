import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'It is considered impossible till someone does it','Nelson Mandela','Kimemia Mwangi',new Date(2020,3,19),0,0),
    new Quote(2,'Get busy living or get busy dying','Stephen King','Nicholas Ruto',new Date(2015,4,23),0,0),
    new Quote(3,'Turn your wounds into wisdom','Oprah Winfrey','Grace Mugambi',new Date(2019,7,12),0,0),
    new Quote(4,'There are no regrets in life, just lessons','Jennifer Anniston','Hope Subira',new Date(2017,9,15),0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
   }
   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
   }
   deleteQuote( isDelete,index){
      if(isDelete){
        let isDelete = confirm(`Are you sure you want to delete this quote?`)

        if (isDelete){
          this.quotes.splice(index,1)

    
       }
      }
    }

  
  constructor() { }
  ngOnInit(){
  }

}
