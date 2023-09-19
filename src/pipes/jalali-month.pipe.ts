import { Pipe, PipeTransform } from '@angular/core';

const jalaliMonthTranslations: { [key: string]: string } = {
  'Farvardin': 'فروردین',
  'Ordibehesht': 'اردیبهشت',
  'Khordaad': 'خرداد',
  'Tir': 'تیر',
  'Mordaad': 'مرداد',
  'Shahrivar': 'شهریور',
  'Mehr': 'مهر',
  'Aabaan': 'آبان',
  'Aazar': 'آذر',
  'Dey': 'دی',
  'Bahman': 'بهمن',
  'Esfand': 'اسفند',
};

@Pipe({
  name: 'jalaliMonth',
})
export class JalaliMonthPipe implements PipeTransform {
  transform(monthName: string): string {
    // Check if the month name exists in the translations object
    if (jalaliMonthTranslations[monthName]) {
      return jalaliMonthTranslations[monthName];
    }
    
    // If the translation doesn't exist, return the original name
    return monthName;
  }
}