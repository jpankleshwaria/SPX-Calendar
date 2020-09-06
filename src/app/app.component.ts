import { Component } from '@angular/core';
import { DaysEnum, enumSelector, MonthsEnum } from './constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spinx-Calendar';
  days = enumSelector(DaysEnum);
  months = enumSelector(MonthsEnum);

  constructor(){

  }
  
}
