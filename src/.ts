/*---Time-&-Date---*/

const clock:Array<string> = ["󱑖","󱑋","󱑌","󱑍","󰅐","󱑏","󱑐","󱑑","󱑒","󱑓","󱑔","󱑕"];
const calendar:Array<string> = ["󱨱","󱨴","󱨳","󰻚"];

const dCli:HTMLElement = document.getElementById("clockIcon");
const dTime:HTMLElement = document.getElementById("timeText");

const dCai:HTMLElement = document.getElementById("calendarIcon");
const dDate:HTMLElement = document.getElementById("dateText");

const cBattery: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("batteryLoadBar");
const colorGradiant:Array<string> = ["#23232", "#43334","..."];

function format(_day:string):string{ if(_day.length < 2){ return "0"+_day; } else { return _day; } };

function setDate(){
    var date = new Date
    var calendarIcon:string;

    switch(date.getDay()){
        case 1:{
            calendarIcon = calendar[0];
            break;
        } case 5:{
            calendarIcon = calendar[2];
            break;
        } case 6:{
            calendarIcon = calendar[3];
            break;
        } case 7:{
            calendarIcon = calendar[3];
            break;
        } default :{
            calendarIcon = calendar[1];
            break;
        }
    }

    dCai.innerText = calendarIcon;
    dDate.innerText = `${format(String(date.getDate()))}日、${format(String(date.getMonth()))}月、${date.getFullYear()}年`;

    return;
}

function upDateTime(){
    var date = new Date;
    var clockIcon:string;

    clockIcon = clock[date.getHours()%12];

    dCli.innerText = clockIcon;
    dTime.innerText = `${format(String(date.getHours()))}時、${format(String(date.getMinutes()))}分、${format(String(date.getSeconds()))}秒`;

    return;
}
    
setDate();
setInterval(upDateTime, 1000);

/*---Battery-Canvas---*/

class dot{
private width:number = 0;
private height:number = 0;

public
    constructor(_size:Array<number>, _color:string){
        this.width = _size.length;
    }
}


function drawBattery(load:number):void{
    const ctx = cBattery.getContext("2d");
    ctx.canvas.width =  800;
    ctx.canvas.height = 100;
    for(var colon:number = 0; colon < 100; colon += 10){
        for( var row:number = 0; row < 12.5; row += 12.5)
        {
            ctx.fillRect(colon,row,8,8)
        }
    }   
}