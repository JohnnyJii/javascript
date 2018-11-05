function laske() {
  var num1;
  var num2;
  var vastaus;
  var operation;

  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  operation = document.getElementById("operation").value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operation) {
    case "+":
      vastaus = num1 + num2;
      break;
    case "-":
      vastaus = num1 - num2;
      break;
    case "*":
      vastaus = num1 * num2;
      break;
    case "/":
      vastaus = num1 / num2;
      break;
    case "^":
      vastaus = Math.pow(num1, num2);
      break;
    default:
      vastaus = "Tapahtui virhe!";
      break;
  }

  document.getElementById('vastaus').innerHTML = vastaus;
}
