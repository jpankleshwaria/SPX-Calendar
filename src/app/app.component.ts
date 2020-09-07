import { Component, OnInit } from '@angular/core';
import { DaysEnum, enumSelector, MonthsEnum, appConstant } from './constants/app-constants';
import moment from 'moment';

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
  selectedYear = 2019;
  selectedMonth = 1;
  selectedDate = 1;
  selectedDay = 2;
 
  constructor(){
    this.days = this.days.slice(this.days.length / 2);
    this.months = this.months.slice(this.months.length / 2);
  }

  ngOnInit(): void {
    this.dates = appConstant.dateValues;
  }

  displayMonthCondition(month, index) {
    var currDate = moment( month + "-1-" + this.selectedYear, "MM-DD-YYYY");
    if(currDate.day() == index) {
      return true;
    }
    return false;
  }

  displayDateCondition(dateNum, index) {
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

  displaySelectedDay(checkValue) {
    if(checkValue == this.selectedDay) {
      return true;
    }
    return false;
  }
}
