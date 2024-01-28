import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JalaliCalendarRoutingModule } from 'app/jalali-calendar.routing.module';
import { JalaliCalendarComponent } from 'app/jalali-calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JalaliMonthPipe } from 'pipes/jalali-month.pipe'; // Import the JalaliMonthPipe
import { JalaliNumPipe } from 'pipes/jalali-num.pipe'; // Import the JalaliNumPipe

// Angular Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    JalaliCalendarComponent,
    JalaliMonthPipe,
    JalaliNumPipe
  ],
  imports: [
    BrowserModule,
    JalaliCalendarRoutingModule,
    BrowserAnimationsModule,
    // Angular Material Modules
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [JalaliCalendarComponent]
})
export class JalaliCalendarModule { }
