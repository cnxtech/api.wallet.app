/**
 * Created by ori on 4/27/2017.
 */

import { Routes, RouterModule } from '@angular/router';

import { CoinListWidgetComponent } from './components/coin-list-widget/coin-list-widget.component';

const appRoutes: Routes = [
    { path: '', component: CoinListWidgetComponent },
    // { path: 'coin-list-widget', component: CoinListWidgetComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
