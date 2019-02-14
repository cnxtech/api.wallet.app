import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule} from '@angular/material';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CoinListWidgetComponent } from './components/coin-list-widget/coin-list-widget.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { TwinsCoinListWidgetComponent } from './widgets/twins-coin-list-widget/twins-coin-list-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListWidgetComponent,
    SearchPipe,
    TwinsCoinListWidgetComponent
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
