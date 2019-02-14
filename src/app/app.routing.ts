/**
 * Created by ori on 4/27/2017.
 */

import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'coin-list-widget', component: CoinListComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
