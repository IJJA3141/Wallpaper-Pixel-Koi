var clock = ["󱑖", "󱑋", "󱑌", "󱑍", "󰅐", "󱑏", "󱑐", "󱑑", "󱑒", "󱑓", "󱑔", "󱑕"];
var calendar = ["󱨱", "󱨴", "󱨳", "󰻚"];
var dCli = document.getElementById("clockIcon");
var dTime = document.getElementById("timeText");
var dCai = document.getElementById("calendarIcon");
var dDate = document.getElementById("dateText");
function dirty(_day) {
    if (_day.length < 2) {
        return "0" + _day;
    }
    else {
        return _day;
    }
}
function setDate() {
    var date = new Date;
    var calendarIcon;
    switch (date.getDay()) {
        case 1: {
            calendarIcon = calendar[0];
            break;
        }
        case 5: {
            calendarIcon = calendar[2];
            break;
        }
        case 6: {
            calendarIcon = calendar[3];
            break;
        }
        case 7: {
            calendarIcon = calendar[3];
            break;
        }
        default: {
            calendarIcon = calendar[1];
            break;
        }
    }
    dCai.innerText = calendarIcon;
    dDate.innerText = "".concat(dirty(String(date.getDate())), "\u65E5\u3001").concat(dirty(String(date.getMonth())), "\u6708\u3001").concat(date.getFullYear(), "\u5E74");
    return;
}
function upDateTime() {
    var date = new Date;
    var clockIcon;
    clockIcon = clock[date.getHours() % 12];
    dCli.innerText = clockIcon;
    dTime.innerText = "".concat(dirty(String(date.getHours())), "\u6642\u3001").concat(dirty(String(date.getMinutes())), "\u5206\u3001").concat(dirty(String(date.getSeconds())), "\u79D2");
    return;
}
setDate();
setInterval(upDateTime, 1000);
var cBattery = document.getElementById("batteryLoadBar");
var ctx = cBattery.getContext("2d");
ctx.canvas.width = 800;
ctx.canvas.height = 100;
ctx.fillRect(0, 0, 10, 10);
