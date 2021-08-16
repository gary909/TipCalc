function tipCalc(x, perc, people){
    var tip = (x / 100) * perc / people;
    return "A " + perc + "% tip of $" + x + " divided by " + people + " people" + " equals a $" + tip + " tip per person!";
}

console.log(tipCalc(100, 10, 2)); // bill amount, tip percentage