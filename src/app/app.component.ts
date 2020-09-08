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
  selectedDay = 1;
  visibleDay = false;
  monthColCount = 0;
  currIndex1;
  currIndex2;
  currIndex3;
  occur;
  displayMonths = [];
  m1Row = [];
  m2Row = [];
  m3Row = [];
 
  constructor(){
    this.days = this.days.slice(this.days.length / 2);
    this.months = this.months.slice(this.months.length / 2);
  }

  ngOnInit(): void {
    this.dates = appConstant.dateValues;
  }

  displayMonthCondition(month, index, endDate) {
    if(this.currIndex1 != index){
      if(index == 1 && endDate == 30){
        this.monthColCount = 0;
      }
  
      if(month == 2){
        // alert(" with 4 " + this.selectedYear / 4)
        // alert(" with 100 " + this.selectedYear / 100)
        // alert(" with 400 " + this.selectedYear / 400)
        endDate = 28;
      }
  
      var currDate = moment( month + "-1-" + this.selectedYear, "MM-DD-YYYY");
      if(currDate.day() == index) {
        this.monthColCount += 1;
        this.currIndex1 = index;
        this.displayMonths.push(month.toString());
        this.m1Row.push(month);
        return 1;
      }
    }

    return 2;
  }

  displayMonth2Condition(month, index, endDate) {
    if(this.currIndex2 != index){
      if(index == 1 && endDate == 30){
        this.monthColCount = 0;
      }
  
      if(month == 2){
        // alert(" with 4 " + this.selectedYear / 4)
        // alert(" with 100 " + this.selectedYear / 100)
        // alert(" with 400 " + this.selectedYear / 400)
        endDate = 28;
      }
  
      var currDate = moment( month + "-1-" + this.selectedYear, "MM-DD-YYYY");

      if(currDate.day() == index && this.displayMonths.find(m => m == month) == null) {
        this.monthColCount += 1;
        this.currIndex2 = index;
        this.m2Row.push(month);
        return 1;
      } else {
        if(this.displayMonths.find(m => m == month) == null && month == 12){
          // this.m2Row.forEach(ele => {
          //   this.displayMonths.push(ele);
          // });
          return 3; // Add blank td
        }
      }

    }

    return 2;
  }

  displayMonth3Condition(month, index, endDate) {
    if(this.currIndex3 != index){
      // if(month == 11 && index == 5)
      //   debugger;

      if(this.m3Row.find(ele => ele == month) == null){
        if(index == 1 && month == 1){
            this.m1Row.forEach(ele => {
              this.m3Row.push(ele);
            });
            this.m2Row.forEach(ele => {
              this.m3Row.push(ele);
            });
        }
    
        if(this.m1Row.find(ele => ele == month) == null &&
            this.m2Row.find(ele => ele == month) == null && 
            this.displayMonths.find(ele => ele == month) == null){
          if(month == 2){
            // alert(" with 4 " + this.selectedYear / 4)
            // alert(" with 100 " + this.selectedYear / 100)
            // alert(" with 400 " + this.selectedYear / 400)
            endDate = 28;
          }
      
          var currDate = moment( month + "-1-" + this.selectedYear, "MM-DD-YYYY");
    
          if(currDate.day() == index) {
            this.monthColCount += 1;
            this.currIndex3 = index;
            // this.displayMonths.push(month);
            // this.m1Row.push(month);
            // this.m2Row.push(month);
            this.m3Row.push(month);
            return 1;
          } 
        }
        // if(this.displayMonths.find(m => m == month) == null && month == 12){
        //   return 3; // Add blank td
        // }
        // if(this.m3Row.find(m => m == month) == null && month == 12){
        //   return 3; // Add blank td
        // }

      }

      if(this.m1Row.find(ele => ele == month) == null &&
            this.m2Row.find(ele => ele == month) == null &&
            this.displayMonths.find(ele => ele == month) == null){
              return 3;
      }
      return 2;
    }
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

  decYear(){
    this.selectedYear += 1;
  }

  incYear(){
    this.selectedYear -= 1;
  }

  dateClick(dateNum){
    this.selectedDate = dateNum;
    var currDate = moment( this.selectedMonth + "-"+ this.selectedDate +"-" + this.selectedYear, "MM-DD-YYYY");
    this.selectedDay = currDate.day();
  }

  monthClick(monthNum){
    this.selectedMonth = monthNum;
    var currDate = moment( this.selectedMonth + "-"+ this.selectedDate +"-" + this.selectedYear, "MM-DD-YYYY");
    this.selectedDay = currDate.day();
  }
}
