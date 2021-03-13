var counter = 310;

setInterval(function () {
  counter--;

  if (counter >= 0) {
    id = document.getElementById('count');
    id.innerHTML = counter;
  }

  if (counter === 0) {
    id.innerHTML = '0';
    const warn = document.getElementById('warning');
    warn.style.visibility = 'visible';
    warn.style.height = '50px';
  }
}, 1000);
