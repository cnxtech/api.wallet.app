import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], arg: any): any {
        // console.log(typeof arg)
        // console.log(items)
        if (typeof arg === 'string') {
            return items.filter(item => (typeof item === 'string' ? item.toLowerCase().indexOf(arg.toLowerCase()) !== -1 : item.value.toLowerCase().indexOf(arg.toLowerCase()) !== -1));
        }
        if (typeof arg === 'object') {
            return items.filter(item => JSON.stringify(arg).indexOf(typeof item === 'string' ? item.toLowerCase() : item.key.toLowerCase()) === -1);
            // return items.filter(item => !arg.includes(item));
        }
    }
}


