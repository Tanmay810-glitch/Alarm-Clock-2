//Function for displaying display-time
var currTime = document.getElementById("current-time");
console.log(currTime);
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    currTime.innerText = time;
    let t = setTimeout(function(){
        currentTime()
        if(alarm_List.includes(time)){
            ringing(time);
        }
    }, 1000);
}
currentTime();

/*If hours, min or seconds are less then 10 then the formatTime
function, will put '0' before that digit.

If 9, then 09, and so on.
*/
function formatTime(time) {
    if(time < 10 && time.length != 2){
        return "0" + time;
    }
}
const myList = document.querySelector(".user-input");

//Adding alarm from user input
let alarm_List = [];
const userInput = document.querySelector(".user-input")
userInput.addEventListener("submit", function(e){
    e.preventDefault();
    const hour = userInput.hour.value;
    const min = userInput.min.value;
    const sec = userInput.sec.value;

    let new_h = formatTime(hour);
    if(new_h === "0"){
        new_h = "00";
    }

    let new_m = formatTime(min);
    if(new_m === "0"){
        new_m = "00";
    }

    let new_s = formatTime(sec);
    if(new_s === "0"){
        new_s = "00";
    }

const new_Alarm = `${new_h}:${new_m}:${new_s}`;
if(isNaN(new_Alarm)) {
    if(!alarm_List.includes(new_Alarm)) {
        alarm_List.push(new_Alarm);
        shownew_Alarm(new_Alarm);
        addAlarm.reset();
    } else {
        alert(`Alarm for ${new_Alarm} already set.`);
    }
} else {
    alert("Invalid time entered.")
}
});

/*The shownew_Alarm function will 
add the new alarm in the list with delete button*/
function shownew_Alarm(new_Alarm){
    const html =`
    <li class="time-list">
        <span class="line">${new_Alarm}</span>
        <button class="deleteAlarm time-control" id="delete-button" 
        onclick="remove{this.value}" value=${new_Alarm}></button>
    </li>`;
    myList.innerHTML += html;
}

//Audio
const audio = new Audio("Alarm-ringtone.mp3");

//Adding a loop to continue playing the alarm
audio.loop = true;

//Rings the audio at the correct time
function ringing(time){
    audio.play();
    audio.play();
    alert(`Hey! It is ${time}`);
}

//Function for stopping the alarm
const clearAlarm = () => {
    audio.pause();
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
};

//Function for stopping the alarm
const mylist = document.getElementsByClassName("set-alarms-list");
myList.addEventListener("click", (e) => {
    if(e.target.classList.contains("deleteAlarm")){
        e.target.parentElement.remove();
    }
});

/*Removing the Alarm from the ArrayList, when the ("Delete Alarm") 
Button is clicked*/
const remove = (value) => {
    let newList = alarm_List.filter((time) => time != value);
    alarm_List.length = 0; //Clears the contents
    alarm_List.push.apply(alarm_List, newList);
};