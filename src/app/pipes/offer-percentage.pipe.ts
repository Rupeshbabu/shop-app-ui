import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerPercentage',
})
export class OfferPercentagePipe implements PipeTransform {
  transform(price: number, salePrice: number): string {
    if (!price || !salePrice) {
      return '';
    }

    //to display exact percentage
    //  const percentage = ((price - salePrice)/price) * 100;
    //  return percentage.toFixed(2) + '%';

    // to display two digits only (if 16.34% to display 16% and if 13.75 to display 14%)
    const percetage = Math.ceil(((price - salePrice) / price) * 100);
    return percetage + '%';
  }
}
