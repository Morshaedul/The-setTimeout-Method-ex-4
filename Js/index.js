let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("demo").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
}




// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);