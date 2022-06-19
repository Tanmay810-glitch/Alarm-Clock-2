//Function for displaying display-time
function currentTime() {
    var currTime = document.getElementById("current-time");

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
        currentTime();
    }, 1000);
}
currentTime();

export { currentTime };