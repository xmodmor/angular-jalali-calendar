import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'jalaliNum'})
export class JalaliNumPipe implements PipeTransform {
  transform (value: any, type: string = 'etf'): any {
    if (value || value === 0) {
      let toString = Object.prototype.toString;
      if (!isNaN(value) && isFinite(value)) {
        if (type === 'fte') {
          value = JalaliNumPipe.convertNumToEn(value.toString());
        } else {
          value = JalaliNumPipe.convertNumToFa(value.toString());
        }
      } else if (toString.call(value) == '[object String]') {
        if (type === 'fte') {
          value = JalaliNumPipe.convertNumToEn(value);
        } else {
          value = JalaliNumPipe.convertNumToFa(value);
        }
      }
    }
    return value;
  }

  static convertNumToFa (value: string): string {
    const faNumArr: string[] = [ '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰' ];
    const enNumArr: string[] = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    for (let i = 0; i < 10; i++) {
      const ve = new RegExp(enNumArr[ i ], 'g');
      value    = value.replace(ve, faNumArr[ i ]);
    }
    return value;
  }

  static convertNumToEn (value: string): string {
    const faNumArr: string[] = [ '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰' ];
    const enNumArr: string[] = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
    for (let i = 0; i < 10; i++) {
      const ve = new RegExp(faNumArr[ i ], 'g');
      value    = value.replace(ve, enNumArr[ i ]);
    }
    return value;
  }


}