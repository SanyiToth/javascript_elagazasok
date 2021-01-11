let a = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let b = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
let c = null;

let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");
switch (operator) {
    case "+":
        c = a + b;
        console.log("A két szám összege: " + c);
        break;
    case "-":
        c = a - b;
        console.log("A két szám különbsége: " + c);
        break;
    case "/":
        c = a / b;
        console.log("A két szám hányadosa: " + c);
        break;
    case "*" :
        c = a * b;
        console.log("A két szám szorzata: " + c);
        break;
    default:
        c = "Hibás műveletet adtál meg!";
        console.log(c);
}
