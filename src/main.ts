import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { JalaliCalendarModule } from './app/jalali-calendar.module';


platformBrowserDynamic().bootstrapModule(JalaliCalendarModule)
  .catch(err => console.error(err));
