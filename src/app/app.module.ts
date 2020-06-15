import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesdetailsComponent } from './quotesdetails/quotesdetails.component';
import { QuotesformComponent } from './quotesform/quotesform.component';
import { DateCountPipe } from './date-count.pipe';
import { VotecountDirective } from './votecount.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesdetailsComponent,
    QuotesformComponent,
    DateCountPipe,
    VotecountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
