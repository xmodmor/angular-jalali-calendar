import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JalaliCalendarRoutingModule } from 'app/jalali-calendar.routing.module';
import { JalaliCalendarComponent } from 'app/jalali-calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JalaliMonthPipe } from 'pipes/jalali-month.pipe'; // Import the JalaliMonthPipe
import { JalaliNumPipe } from 'pipes/jalali-num.pipe'; // Import the JalaliNumPipe

@NgModule({
  declarations: [
    JalaliCalendarComponent,
    JalaliMonthPipe,
    JalaliNumPipe
  ],
  imports: [
    BrowserModule,
    JalaliCalendarRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [JalaliCalendarComponent]
})
export class JalaliCalendarModule { }
