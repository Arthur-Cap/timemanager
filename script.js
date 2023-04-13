function displayTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // add leading zero to minutes and seconds
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;
   
}
setInterval(displayTime, 1000);


let workIndex = 1;
const works = document.querySelectorAll('.Work');

const interval = setInterval(() => {
  if (workIndex > works.length) {
    clearInterval(interval);
    return;
  }
  
  const element = works[workIndex - 1];
  element.style.transform = "scale(1,1)";
  element.style.transition = 'all 0.2s ease-out';

  workIndex++;
}, 150);
function removene(text){
    document.querySelector(text).style.transform = "scale(1,0)";
    document.querySelector(text).style.transition= 'all 0.2s ease-out';
    setTimeout(function(){ document.querySelector(text).remove(text);},400)
    
}
// removene("#work4");
// setTimeout(function(){
//     removene("#work1")},200);

var tasks = document.querySelectorAll(".end-task-button");

tasks.forEach(element => {
    element.addEventListener("click", function() {
        console.log(element.parentNode.id);
        removene("#"+element.parentNode.id);
    
    });
    
})



var time = "00:00:20";
var timeParts = time.split(":");
var hoursInSeconds = parseInt(timeParts[0]) * 3600;
var minutesInSeconds = parseInt(timeParts[1]) * 60;
var secondinSecond = parseInt(timeParts[2]) ;
var totalSeconds = hoursInSeconds + minutesInSeconds + secondinSecond;
var reduceTime = 1;
var permanentSecond = totalSeconds;
var intervalId;


function calculateTime(){
    
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours*3600) / 60);
    let seconds = totalSeconds % 60;
    document.querySelector("#time-remain").innerHTML = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    document.querySelector("#clock").style.strokeDashoffset= 879-(totalSeconds/permanentSecond*879);
    totalSeconds = totalSeconds-reduceTime;
    
}

function runtime (){
intervalId = setInterval(function(){
    calculateTime();
    if (totalSeconds < 0) {
        clearInterval(intervalId);
    }
} , 1000);
}
runtime();
document.querySelector("#stop-time").addEventListener("click", function() {
    if(totalSeconds>0){
    if (reduceTime === 0) {
        document.querySelector("#stop-time").name ="pause-circle-outline";
      reduceTime = 1;
      runtime();
    } else {
        document.querySelector("#stop-time").name ="play-circle-outline";
        clearInterval(intervalId);
      reduceTime = 0;
    }
  }});
  
  document.querySelector("#reset-time").addEventListener("click", function() {
    totalSeconds = permanentSecond;
    clearInterval(intervalId);
    calculateTime();
    document.querySelector("#stop-time").name ="play-circle-outline";

}
  )


