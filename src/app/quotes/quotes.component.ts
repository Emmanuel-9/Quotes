import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[]=[
    new Quote('It is considered impossible till someone does it','Nelson Mandela','Kimemia Mwangi',new Date(2020,3,19)),
    new Quote('Get busy living or get busy dying','Stephen King','Nicholas Ruto',new Date(2015,4,23)),
    new Quote('Turn your wounds into wisdom','Oprah Winfrey','Grace Mugambi',new Date(2019,7,12)),
    new Quote('There are no regrets in life, just lessons','Jennifer Anniston','Hope Subira',new Date(2017,9,15)),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.new = quoteLength+1;
    quote.entryDate = new Date(quote.entryDate)
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
