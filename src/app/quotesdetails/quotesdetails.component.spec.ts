import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesdetailsComponent } from './quotesdetails.component';

describe('QuotesdetailsComponent', () => {
  let component: QuotesdetailsComponent;
  let fixture: ComponentFixture<QuotesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
