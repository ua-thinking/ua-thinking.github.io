var sec = 70;
var myTimer = document.getElementById('myTimer');
var commitButton = document.getElementById('commitButton');
window.onload = countDown;

function countDown() {
  if (sec < 10) {
    myTimer.innerHTML = "0" + sec;
  } else {
    myTimer.innerHTML = sec;
  }
  if (sec <= 0) {
    $("#commitButton").removeAttr("disabled");
    $("#commitButton").removeClass().addClass("btnEnable");
    $("#myTimer").fadeTo(2500, 0);
    commitButton.innerHTML = "Salvar";
    return;
  }
  sec -= 1;
  window.setTimeout(countDown, 1000);
}