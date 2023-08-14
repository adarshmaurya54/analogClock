const hr = document.querySelector(".hours i");
const min = document.querySelector(".minutes i");
const sec = document.querySelector(".seconds i");
const root = document.querySelector(":root");
const todayDate = document.querySelector(".today-date");
const day = document.querySelector(".day");
const msg = document.querySelector(".msg");
const bgimage = document.querySelector(".clock img");
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
var independenceDayDate = "1947/08/13";
function calculateYear(date) { // birthday is a date
    // Below one is the single line logic to calculate the no. of years...
    var years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
    console.log(years);
    return years;
}
if(dd === 15 && mm === 8){
    let i = 1;
    setInterval(() => {
        bgimage.src = `./images/flag${i}.jpeg`;
        root.style.setProperty('--clr', '#000');
        msg.style.display = "block";
        msg.innerHTML = `happy ${calculateYear(independenceDayDate)}th independence day`;
        if(i == 4){
            hr.style.backgroundColor = "#000";
            min.style.backgroundColor = "#000";
        }else if (i == 3){
            root.style.setProperty('--clr', '#fff');
        }else{
            hr.style.backgroundColor = "#fff";
            min.style.backgroundColor = "#fff";
        }
        i++;
        if(i == 5){
            i = 1;
        }
    },3000)
}
if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
todayDate.innerHTML = formattedToday;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

day.innerHTML = days[today.getDay()];

setInterval(() => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

    sec.style.transformOrigin = "bottom";
    sec.style.transform = `rotate(${srotation}deg)`;
    min.style.transformOrigin = "bottom";
    min.style.transform = `rotate(${mrotation}deg)`;
    hr.style.transformOrigin = "bottom";
    hr.style.transform = `rotate(${hrotation}deg)`;
}, 1000);
