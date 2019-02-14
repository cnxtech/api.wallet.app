import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinPriceMarqueeComponent } from './coin-price-marquee.component';

describe('CoinPriceMarqueeComponent', () => {
  let component: CoinPriceMarqueeComponent;
  let fixture: ComponentFixture<CoinPriceMarqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinPriceMarqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPriceMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
