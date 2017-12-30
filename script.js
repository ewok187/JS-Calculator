var box = document.getElementById("display");

function toScreen(x) {
  box.value += x;
  if (x === "c") {  // AC
    box.value = "";
  }
}

function answer() { // =
  box.value = eval(box.value);
}

function power() {  // x^2
  box.value = eval(box.value * box.value)
}

function backspace() { // DEL
  var num = box.value;
  var len = num.length-1;
  box.value = num.substring(0, len);
}

var degrees = 0;
  function rotateMe(e) {

    degrees += 2880;

    $('.calculator').css({

      'transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-o-transform': 'rotate(' + degrees + 'deg)',
    });
  }
