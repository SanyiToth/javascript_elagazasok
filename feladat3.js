let a = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let b = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let c = null;
let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");
if (operator == "+") {
    c = a + b;
    console.log("A két szám összege: " + c);
} else if (operator == "-") {
    c = a - b;
    console.log("A két szám különbsége: " + c);
} else if (operator == "/") {
    c = a / b;
    console.log("A két szám hányadosa: " + c);
} else if (operator == "*") {
    c = a * b;
    console.log("A két szám szorzata: " + c);
} else {
    c = "Hibás műveletet adtál meg!";
    console.log(c);
}


