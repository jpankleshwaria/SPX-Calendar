import { Component, OnInit } from '@angular/core';
import { DaysEnum, enumSelector, MonthsEnum, appConstant } from './constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Spinx-Calendar';
  days = enumSelector(DaysEnum);
  months = enumSelector(MonthsEnum);
  dates;
  selectedYear = 2020;
  selectedMonth = 9;
  selectedDate = 10;
 
  constructor(){
    this.days = this.days.slice(this.days.length / 2);
    this.months = this.months.slice(this.months.length / 2);
  }

  ngOnInit(): void {
    this.dates = appConstant.dateValues;
    console.log(this.dates);
  }

  displayDateCondition(dateNum, index) {
    console.log(index , dateNum + ' = ' + parseInt(dateNum) % 7 );
    
    if(index == 7)
      index = 0;

    if((parseInt(dateNum) % 7) == index) {
      return true;
    }
    return false;
  }

  displayDayCondition(checkValue, elementValue) {
    if(checkValue > elementValue ) {
      return true;
    }
    return false;
  }
}
