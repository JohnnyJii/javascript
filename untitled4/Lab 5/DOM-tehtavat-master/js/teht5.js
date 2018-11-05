function updateClock() {
  const now = new Date(),
      months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'
        , 'September', 'October', 'November', 'December'];
  kello = chekLength(now.getHours()) + ':' + chekLength(now.getMinutes()) +
      ':' + chekLength(now.getSeconds()),

      date = [now.getDate(), months[now.getMonth()], now.getFullYear()].join(
          ' ');

  document.getElementById('kello').innerHTML = [date, kello].join(' / ');

  setTimeout(updateClock, 1000);
}

function chekLength(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return num
  }
}

updateClock();