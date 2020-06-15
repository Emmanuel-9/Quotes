import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesformComponent } from './quotesform.component';

describe('QuotesformComponent', () => {
  let component: QuotesformComponent;
  let fixture: ComponentFixture<QuotesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
