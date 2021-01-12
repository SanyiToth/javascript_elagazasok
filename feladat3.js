let c = null;
let n = null;
while (n == null) {
    let a = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
    let b = Number.parseInt(window.prompt("Adj meg egy tetszőleges számot!"));
    let operator = window.prompt("Add meg milyen müveletet végezzünk el a két számon (+,-,/,*)? ");
    if (operator == "+") {
        c = a + b;
        console.log("A két szám összege: " + c);
        n++;
    } else if (operator == "-") {
        c = a - b;
        console.log("A két szám különbsége: " + c);
        n++;
    } else if (operator == "/") {
        c = a / b;
        console.log("A két szám hányadosa: " + c);
        n++;
    } else if (operator == "*") {
        c = a * b;
        console.log("A két szám szorzata: " + c);
        n++;
    } else {
        c = "Hibás műveletet adtál meg!";
        window.alert(c);
    }
}


