// function tipCalc(DinnerValue, perc, people){
//     var tip = (DinnerValue / 100) * perc / people;
//     return "A " + perc + "% tip of $" + DinnerValue + " divided by " + people + " people" + " equals a $" + tip + " tip per person!";
// }

function getDinnerValue() {
    var dinTot = document.getElementById("DinnerValue").value;
    var dinPerc = document.getElementById("TipPerc").value;
    var peoPres = document.getElementById("PeoplePres").value;
    var tip = (dinTot / 100) * dinPerc / peoPres;
    // var result = document.getElementById("DinnerValue").value;
    var result = "A " + dinPerc + "% tip of $" + dinTot + " divided by " + peoPres + " people" + " equals a $" + tip.toFixed(2) + " tip per person!";;
    document.getElementById("output").innerHTML = result;
  }

// console.log(tipCalc(100, 10, 2)); // bill amount, tip percentage, amount of people