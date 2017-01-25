function main() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange('B2:G9');
  var values = range.getValues();
  
  var period = 0;
  var w = 0;
  
  //create calendar
  var calendar = CalendarApp.createCalendar("icu timetable");
  
  for(var i=0;i<8;i++){ // 8==Periods
    for(var j=0;j<6;j++){ // 6== mon to sat
      if (values[i][j]=="") {
        w +=1;
        continue;
      }else{
        pushToCalendar(calendar,values[i][j],period,w)
        Logger.log(values[i][j]);
        w +=1;
      }
    }
  period += 1;
  w =0;
  }
}

function pushToCalendar(calendar,value,period,w){
  
  // new func to get this monday
  var bginSemMon = thisMonday();
  var year = bginSemMon.getFullYear();
  var month = bginSemMon.getMonth();
  var monday = bginSemMon.getDate();
  
  var day = monday+w;
  var min = setPeriod(period);
  
  // 10:10 => 00:610, set only by minutes
  Logger.log(new Date(year,month,day,0,min));
  
  var start_date = new Date(year,month,day,0,min);
  var end_date = new Date(year,month,day,0,min+70);
  var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(11);
  
  // exucute creation of event
  calendar.createEventSeries(value,start_date,end_date,recurrence);
}

function setPeriod(period){
  var min = 60*8+50;
  switch(period){
    case 0:
    case 1:
    case 2:
      min += 80*period;
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      period = period - 3;
      min = 60*13+50+80*period;
      break;
  }
  return min;
}

// delete all calendar named "icu timetable"
function deleteCalendars() {
  var calendars = CalendarApp.getCalendarsByName("icu timetable");
  for(var i=0;i< calendars.length;i++){
    calendars[i].deleteCalendar();
  }
}

function thisMonday(){
  var today = new Date();
  // return int
  var day = today.getDay();
  var date = today.getDate();
  monday = new Date();
  monday.setDate(date-day+1);
  return monday;
 
}
