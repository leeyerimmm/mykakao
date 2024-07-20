function getTime(){
  const nowTime = new Date();
  let hours = nowTime.getHours();
  let minutes = nowTime.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
const time = `${hours}:${minutes}`;
document.getElementById('updateTime').textContent = time;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();


function goBack() {
  window.location.href = './fullstack_folder.html';
}