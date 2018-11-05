function updateClock() {
  var now = new Date(),
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'
        , 'September', 'October', 'November', 'December'];
  kello = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),

      date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(' ');

  document.getElementById('kello').innerHTML = [date, kello].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();