let a = window.prompt("Adj meg egy tetszőleges számot!");
let b = window.prompt("Adj meg egy tetszőleges számot!");
if (a < b) {
    console.log("'a' kisebb mint 'b'!");
} else if (b < a) {
    console.log("'b' nagyobb mint 'a'!");
} else {
    console.log("'a='" + a +" és"+"'b='" + b + " számok egyenlőek egymással!");
}