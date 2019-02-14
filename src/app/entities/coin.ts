
export class Coin {
    private _ath: any =  null;
    private _ath_change_percentage: any =  null;
    private _ath_date: any =  null;
    private _circulating_supply: string =  '';
    private _current_price: any =  null;
    private _high_24h: any =  null;
    private _id: string =  '';
    private _image: string =  '';
    private _last_updated: string =  '';
    private _low_24h: any =  null;
    private _market_cap: any =  null;
    private _market_cap_change_24h: any =  null;
    private _market_cap_change_percentage_24h: any =  null;
    private _market_cap_rank: number =  1;
    private _name: string =  '';
    private _price_change_24h: any =  null;
    private _price_change_percentage_24h: any =  null;
    private _roi: any =  null;
    private _symbol: string =  '';
    private _total_supply: number =  0;
    private _total_volume: any =  null;


    get ath(): any {
        return this._ath;
    }

    set ath(value: any) {
        this._ath = value;
    }

    get ath_change_percentage(): any {
        return this._ath_change_percentage;
    }

    set ath_change_percentage(value: any) {
        this._ath_change_percentage = value;
    }

    get ath_date(): any {
        return this._ath_date;
    }

    set ath_date(value: any) {
        this._ath_date = value;
    }

    get circulating_supply(): string {
        return this._circulating_supply;
    }

    set circulating_supply(value: string) {
        this._circulating_supply = value;
    }

    get current_price(): any {
        return this._current_price;
    }

    set current_price(value: any) {
        this._current_price = value;
    }

    get high_24h(): any {
        return this._high_24h;
    }

    set high_24h(value: any) {
        this._high_24h = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get last_updated(): string {
        return this._last_updated;
    }

    set last_updated(value: string) {
        this._last_updated = value;
    }

    get low_24h(): any {
        return this._low_24h;
    }

    set low_24h(value: any) {
        this._low_24h = value;
    }

    get market_cap(): any {
        return this._market_cap;
    }

    set market_cap(value: any) {
        this._market_cap = value;
    }

    get market_cap_change_24h(): any {
        return this._market_cap_change_24h;
    }

    set market_cap_change_24h(value: any) {
        this._market_cap_change_24h = value;
    }

    get market_cap_change_percentage_24h(): any {
        return this._market_cap_change_percentage_24h;
    }

    set market_cap_change_percentage_24h(value: any) {
        this._market_cap_change_percentage_24h = value;
    }

    get market_cap_rank(): number {
        return this._market_cap_rank;
    }

    set market_cap_rank(value: number) {
        this._market_cap_rank = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price_change_24h(): any {
        return this._price_change_24h;
    }

    set price_change_24h(value: any) {
        this._price_change_24h = value;
    }

    get price_change_percentage_24h(): any {
        return this._price_change_percentage_24h;
    }

    set price_change_percentage_24h(value: any) {
        this._price_change_percentage_24h = value;
    }

    get roi(): any {
        return this._roi;
    }

    set roi(value: any) {
        this._roi = value;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get total_supply(): number {
        return this._total_supply;
    }

    set total_supply(value: number) {
        this._total_supply = value;
    }

    get total_volume(): any {
        return this._total_volume;
    }

    set total_volume(value: any) {
        this._total_volume = value;
    }
}