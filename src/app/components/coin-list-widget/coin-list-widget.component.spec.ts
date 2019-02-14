import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListWidgetComponent } from './coin-list-widget.component';

describe('CoinListWidgetComponent', () => {
  let component: CoinListWidgetComponent;
  let fixture: ComponentFixture<CoinListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
