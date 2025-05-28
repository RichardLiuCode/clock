function updateClock() {
  var now = new Date(); // 獲取當前時間
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = hours + ":" + minutes + ":" + seconds; // 格式化時間
  document.title = timeString;
  document.getElementById("clock").textContent = timeString; // 更新時鐘
}

setInterval(function(){
  updateClock();
}, 700); // 每秒更新一次
updateClock(); // 初始化時鐘
