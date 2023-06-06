const clock: Array<string> = ["󱑖","󱑋","󱑌","󱑍","󰅐","󱑏","󱑐","󱑑","󱑒","󱑓","󱑔","󱑕",];
const calendar: Array<string> = ["󱨱", "󱨴", "󱨳", "󰻚"];

class TimeDate {
  private m_timeDate: HTMLDivElement;

  private m_time: HTMLDivElement;
  public clockIcon: HTMLParagraphElement;
  private m_timePP: HTMLParagraphElement;
  public timeText: HTMLParagraphElement;
  private m_underline: HTMLDivElement;

  private m_date: HTMLDivElement;
  private m_calendarIcon: HTMLParagraphElement;
  private m_datePP: HTMLParagraphElement;
  private m_dateText: HTMLParagraphElement;

  public format(_day: string): string { if (_day.length < 2) { return "0" + _day; } else { return _day; } };

  static upDateTime(_td: TimeDate): void {
    var date = new Date();
    var clockIcon: string;

    clockIcon = clock[date.getHours() % 12];

    _td.clockIcon.innerText = clockIcon;
    _td.timeText.innerText = `${_td.format(
      String(date.getHours())
    )}時、${_td.format(String(date.getMinutes()))}分、${_td.format(
      String(date.getSeconds())
    )}秒`;

    return;
  }

  private m_setDate(): void {
    var date = new Date();
    var calendarIcon: string;

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
    this.m_dateText.innerText = `${date.getFullYear()}年、${this.format(String(date.getMonth() + 1))}月、${this.format(String(date.getDate()))}日`;
    return;
  }

  public constructor(_parent: HTMLElement) {
    this.m_timeDate = document.createElement("div");
    this.m_time = document.createElement("div");
    this.m_date = document.createElement("div");

    this.clockIcon = document.createElement("p");
    this.m_timePP = document.createElement("p");
    this.timeText = document.createElement("p");

    this.m_calendarIcon = document.createElement("p");
    this.m_datePP = document.createElement("p");
    this.m_dateText = document.createElement("p");

    this.m_underline = document.createElement("div");

    this.m_timeDate.id = "timeDate";
    this.m_timeDate.className = "uiBackground"

    this.m_time.id = "time";
    this.clockIcon.id = "clockIcon";
    this.m_timePP.id = "timePP";
    this.timeText.id = "timeText";
    this.m_underline.id = "underLine";

    this.m_date.id = "date";
    this.m_calendarIcon.id = "calendarIcon";
    this.m_datePP.id = "datePP";
    this.m_dateText.id = "dateText";

    this.m_timePP.innerText = ":";
    this.m_datePP.innerText = ":";

    this.m_time.appendChild(this.clockIcon);
    this.m_time.appendChild(this.m_timePP);
    this.m_time.appendChild(this.timeText);
    
    this.m_date.appendChild(this.m_calendarIcon);
    this.m_date.appendChild(this.m_datePP);
    this.m_date.appendChild(this.m_dateText);
    
    this.m_timeDate.appendChild(this.m_time);
    this.m_timeDate.appendChild(this.m_underline);
    this.m_timeDate.appendChild(this.m_date);

    _parent.appendChild(this.m_timeDate);

    this.m_setDate();
    setInterval(() => {
      TimeDate.upDateTime(this);
    }, 1000);

    return;
  }
}

export { TimeDate, clock };
