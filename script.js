let nday = prompt("Який день тижня?");
let lang = prompt("Якою мовою? (ru, ua, en)");

let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
  "неділя",
];
let ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];
if (isNaN(nday) || nday <= 0 || nday > 7) {
  alert("Невірне число");
}
switch (lang) {
  case "en":
    alert(en[nday - 1]);
    break;
  case "ru":
    alert(ru[nday - 1] + "... Скажи паляниця");
    break;
  case "ua":
    alert(ua[nday - 1]);
    break;
  default:
    alert("Ведіть мову правильно!");
}
