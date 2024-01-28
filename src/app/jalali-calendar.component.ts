import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment-jalaali';
import * as jalaliMoment from 'jalali-moment';
import { days, daysAbbr } from 'app/days';


@Component({
  selector: 'app-jalali-calendar',
  templateUrl: './jalali-calendar.component.html',
  styleUrls: ['./jalali-calendar.component.scss'],
})
export class JalaliCalendarComponent implements OnInit{
  @Output() dateSelected = new EventEmitter<string>();

  currentDate: jalaliMoment.Moment;
  calendarDays: jalaliMoment.Moment[][] = [];
  dayNames= days;
  selectedYear: number;
  selectedMonth: number;

  monthOptions = [
    'Farvardin','Ordibehesht','Khordaad','Tir','Mordaad','Shahrivar','Mehr','Aabaan','Aazar','Dey','Bahman','Esfand',
  ];
  constructor() {
    this.currentDate = jalaliMoment(); // Initialize with the current date
    this.generateCalendar();

    this.selectedYear = this.currentDate.jYear();
    this.selectedMonth = this.currentDate.jMonth() + 1;
  }

  ngOnInit(): void {
    
  }

  isCurrentDate(date: jalaliMoment.Moment): boolean {
    return date.isSame(jalaliMoment(), 'day');
  }

  isFriday(day: any): boolean {
    return day === 6;
  }

  goToToday() {
    this.currentDate = jalaliMoment(); // Set currentDate to the current date
    this.generateCalendar(); // Regenerate the calendar
  }

 changeMonth(month: any) {
  console.log(month);
  console.log(this.selectedYear);
  
  if (this.selectedYear >= 1300 && this.selectedYear <= 1500) {
    this.currentDate = jalaliMoment({ year: this.selectedYear , month: month - 1 });
    this.generateCalendar();
  } else {
    this.handleInvalidYearInput();
  }
}

handleInvalidYearInput() {
  // Handle invalid year input (outside the allowed range)
  // You can display an error message or take other actions as needed.
}


  generateCalendar() {
    const firstDayOfMonth = jalaliMoment(this.currentDate).startOf('jMonth');
    const daysInMonth = this.currentDate.jDaysInMonth();
    const days: jalaliMoment.Moment[] = [];

    for (let i = 0; i < daysInMonth; i++) {
      const day = jalaliMoment(firstDayOfMonth).add(i, 'day');
      days.push(day);
    }

    const calendar: jalaliMoment.Moment[][] = [];
    let week: jalaliMoment.Moment[] = [];

    days.forEach((day) => {
      week.push(day);

      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    });

    if (week.length > 0) {
      calendar.push(week);
    }

    this.calendarDays = calendar;
  }

  nextMonth() {
    this.currentDate.add(1, 'jMonth');
    this.generateCalendar();
  }

  previousMonth() {
    this.currentDate.subtract(1, 'jMonth');
    this.generateCalendar();
  }

  selectDate(date: jalaliMoment.Moment) {
    this.dateSelected.emit(date.format('jYYYY-jMM-jDD'));
  }
}
