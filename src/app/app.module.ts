import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule} from '@angular/material';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { TwinsCoinListWidgetComponent } from './widgets/twins-coin-list-widget/twins-coin-list-widget.component';
import { CoinPriceMarqueeComponent } from './components/coin-price-marquee/coin-price-marquee.component';
import { HomeComponent } from './components/home/home.component';
import { CoinPriceMarqueeWidgetComponent } from './widgets/coin-price-marquee-widget/coin-price-marquee-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    SearchPipe,
    TwinsCoinListWidgetComponent,
    CoinPriceMarqueeComponent,
    HomeComponent,
    CoinPriceMarqueeWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
