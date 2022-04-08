days = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
 "Пятница", "Суббота");
let mes;
function tellday() {
 if (document.week_day.day.value>0 && document.week_day.day.value<31) {
 for (let i=0; i<12; i++) if (document.week_day.m[i].selected) mes = i;
 let dat = new Date(document.week_day.year.value,mes,document.week_day.day.value);
 let date = dat.getDate();
let day = dat.getDay();
let weekOfMonth = Math.ceil((date + 6 - day)/7);
 document.week_day.theday.value = days[dat.getDay()] + (", ") + weekOfMonth + (" неделя ") + document.getElementsByName('m')[0].value + (" ") + document.getElementsByName('year')[0].value + (" года");
 }
 return false;
}


