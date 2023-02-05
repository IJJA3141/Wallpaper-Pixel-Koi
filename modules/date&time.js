var clock = [
    "󱑖",
    "󱑋",
    "󱑌",
    "󱑍",
    "󰅐",
    "󱑏",
    "󱑐",
    "󱑑",
    "󱑒",
    "󱑓",
    "󱑔",
    "󱑕",
];
var calendar = ["󱨱", "󱨴", "󱨳", "󰻚"];
var TimeDate = (function () {
    function TimeDate(_parent) {
        var _this = this;
        this.m_timeDate = document.createElement("div");
        this.m_time = document.createElement("div");
        this.m_date = document.createElement("div");
        this.clockIcon = document.createElement("p");
        this.m_timePP = document.createElement("p");
        this.timeText = document.createElement("p");
        this.m_calendarIcon = document.createElement("p");
        this.m_datePP = document.createElement("p");
        this.m_dateText = document.createElement("p");
        this.m_underline = document.createElement("canvas");
        this.m_timeDate.id = "timeDate";
        this.m_time.id = "time";
        this.clockIcon.id = "clockIcon";
        this.m_timePP.id = "timePP";
        this.timeText.id = "timeText";
        this.m_underline.id = "underLine";
        this.m_date.id = "date";
        this.m_calendarIcon.id = "calendarIcon";
        this.m_datePP.id = "datePP";
        this.m_dateText.id = "dateText";
        this.m_time.appendChild(this.clockIcon);
        this.m_time.appendChild(this.m_timePP);
        this.m_time.appendChild(this.timeText);
        this.m_time.appendChild(this.m_underline);
        this.m_date.appendChild(this.m_calendarIcon);
        this.m_date.appendChild(this.m_datePP);
        this.m_date.appendChild(this.m_dateText);
        this.m_timeDate.appendChild(this.m_time);
        this.m_timeDate.appendChild(this.m_date);
        _parent.appendChild(this.m_timeDate);
        this.m_setDate();
        setInterval(function () {
            TimeDate.upDateTime(_this);
        }, 1000);
        return;
    }
    TimeDate.prototype.format = function (_day) {
        if (_day.length < 2) {
            return "0" + _day;
        }
        else {
            return _day;
        }
    };
    TimeDate.upDateTime = function (_td) {
        var date = new Date();
        var clockIcon;
        clockIcon = clock[date.getHours() % 12];
        _td.clockIcon.innerText = clockIcon;
        _td.timeText.innerText = "".concat(_td.format(String(date.getHours())), "\u6642\u3001").concat(_td.format(String(date.getMinutes())), "\u5206\u3001").concat(_td.format(String(date.getSeconds())), "\u79D2");
        return;
    };
    TimeDate.prototype.m_setDate = function () {
        var date = new Date();
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
        this.m_calendarIcon.innerText = calendarIcon;
        this.m_dateText.innerText = "".concat(this.format(String(date.getDate())), "\u65E5\u3001").concat(this.format(String(date.getMonth())), "\u6708\u3001").concat(date.getFullYear(), "\u5E74");
        return;
    };
    return TimeDate;
}());
export { TimeDate, clock };
