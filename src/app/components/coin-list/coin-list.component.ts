import { Component, OnInit } from '@angular/core';
import {Coin} from "../../entities/coin";
import {HttpClient} from "@angular/common/http";
import { environment } from './../../../environments/environment';

declare const $: any;

@Component({
    selector: 'app-coin-list',
    templateUrl: './coin-list.component.html',
    styleUrls: ['./coin-list.component.less'],
})
export class CoinListComponent implements OnInit {

    public _currencyCodeOptions: string[];
    public _currencyCodeSearch: string;
    public _currencyCodeSelected: string;

    public _languageOptions: any[];
    public _languageSearch: string;
    public _languageSelected: any;

    public _coinIdOptions: any[];
    public _coinIdSearch: string;
    public _coinIdSelected: any[];

    // public _data: Coin[];
    private _http: HttpClient;
    public _origin: string;

    public _width: number;
    constructor(http: HttpClient) {
        this._http = http;
        this._origin = window.location.origin;
        this._currencyCodeOptions = [
            "BTC",
            "ETH",
            "USD",
            "AED",
            "ARS",
            "AUD",
            "BRL",
            "CAD",
            "CHF",
            "CLP",
            "CNY",
            "CZK",
            "DKK",
            "EUR",
            "GBP",
            "HKD",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "JPY",
            "KRW",
            "KWD",
            "LKR",
            "MXN",
            "MYR",
            "NOK",
            "NZD",
            "PHP",
            "PKR",
            "PLN",
            "RUB",
            "SAR",
            "SEK",
            "SGD",
            "THB",
            "TRY",
            "TWD",
            "ZAR",
        ];
        this._languageOptions = [
            {key: 'en', value: 'English'},
            {key: 'es', value: 'Español'},
            {key: 'de', value: 'Deutsch'},
            {key: 'nl', value: 'Nederlands'},
            {key: 'pt', value: 'Português'},
            {key: 'fr', value: 'Français'},
            {key: 'it', value: 'Italiano'},
            {key: 'hu', value: 'Magyar nyelv'},
            {key: 'ro', value: 'Limba română'},
            {key: 'sv', value: 'Svenska'},
            {key: 'pl', value: 'język polski'},
            {key: 'id', value: 'Bahasa Indonesia'},
            {key: 'zh', value: '简体中文'},
            {key: 'zh-tw', value: '繁體中文'},
            {key: 'ja', value: '日本語'},
            {key: 'ko', value: '한국어'},
            {key: 'ru', value: 'ру́сский'},
            {key: 'ar', value: 'العربية'},
            {key: 'th', value: 'ภาษาไทย'},
            {key: 'vi', value: 'Tiếng việt'},
            {key: 'tr', value: 'Türkçe'},
        ];
        this._coinIdOptions = [
            // {key: 'bitcoin', value: 'bitcoin (bitcoin)'},
            // {key: 'ethereum', value: 'ethereum (ethereum)'},
            // {key: 'eos', value: 'eos (eos)'},
            // {key: 'ripple', value: 'ripple (ripple)'},
            // {key: 'litecoin', value: 'litecoin (litecoin)'},
        ];
        this._currencyCodeSearch = '';
        this._currencyCodeSelected = 'USD';
        this._languageSearch = '';
        this._languageSelected = this._languageOptions[0];
        this._coinIdSearch = '';
        this._coinIdSelected = [
            {key: "bitcoin", value: "Bitcoin (BTC)"},
            {key: "ethereum", value: "Ethereum (ETH)"},
            {key: "ripple", value: "XRP (XRP)"},
            {key: "eos", value: "EOS (EOS)"},
            {key: "litecoin", value: "Litecoin (LTC)"},
            {key: "bitcoin-cash", value: "Bitcoin Cash (BCH)"},
            {key: "nem", value: "NEM (XEM)"},
        ];
        this._width = 0;
    }

    ngOnInit() {
        // this.getData();
        this.getCoinList();
    }
    onSelectCurrencyCode(value) {
        this._currencyCodeSelected = value;
        setTimeout(() => {
            this._currencyCodeSearch = '';
        });
    }
    onSelectLanguage(value) {
        this._languageSelected = value;
        setTimeout(() => {
            this._languageSearch = '';
        });
    }
    onSelectCoinId(value) {
        this._coinIdSelected.push(value);
        console.log(this._coinIdSelected)
        // console.log("this._coinIdSelected",this._coinIdSelected)
        setTimeout(() => {
            this._coinIdSearch = '';
        });
    }
    getCoinIdesForWidget() {
        return this._coinIdSelected.map(item => item.key).join(',');
    }
    onRemoveCoinId(value) {
        const index = this._coinIdSelected.indexOf(value);
        this._coinIdSelected.splice(index, 1);
    }
    inputFocus(inputId) {
        setTimeout(() => {
            $('#' + inputId).focus();
        }, 25);
    }
    inputBlur(inputId) {
        setTimeout(() => {
            $('#' + inputId).blur();
        });
    }

    closeCollapse() {
        // setTimeout(() => {
        $('.collapse').removeClass('show');
        // });
    }
    getData() {
        this._http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=&locale=").subscribe(
            data => {
                // this._data = data;
                // this._currencyCodeOptions = this._data.map(item => item.symbol.toUpperCase());
                // this._coinIdOptions = this._data.map(item => JSON.parse('{"key": "' + item.id + '", "value": "' + item.name + ' (' + item.id + ')' + '"}'));
                // console.log("data", this._data);
                // console.log("_coinIdOptions", this._coinIdOptions);
            }
        );
    }

    getCoinList() {
        this._http.get(environment.apiOrigin + "/api/get-coin-list").subscribe(
            (data: any) => {
                console.log("data", data);
                // this._currencyCodeOptions = data.map(item => item.symbol.toUpperCase());
                this._coinIdOptions = data.map(item => JSON.parse('{"key": "' + item.id + '", "value": "' + item.name + ' (' + item.symbol.toUpperCase() + ')' + '"}'));
            }
        );
        // https://api.coingecko.com/api/v3/coins/list
    }


}
