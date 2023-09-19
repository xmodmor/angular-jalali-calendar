import { Component, EventEmitter, Output } from '@angular/core';
import * as jalaliMoment from 'jalali-moment';
import { days, daysAbbr } from 'app/days';

@Component({
  selector: 'app-jalali-calendar',
  templateUrl: './jalali-calendar.component.html',
  styleUrls: ['./jalali-calendar.component.scss'],
})
export class JalaliCalendarComponent {
  @Output() dateSelected = new EventEmitter<string>();

  currentDate: jalaliMoment.Moment;
  calendarDays: jalaliMoment.Moment[][] = [];
  dayNames= days;

  constructor() {
    this.currentDate = jalaliMoment(); // Initialize with the current date
    this.generateCalendar();
  }

  isCurrentDate(date: jalaliMoment.Moment): boolean {
    return date.isSame(jalaliMoment(), 'day');
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
