// Build a calculator and performed the arithmetic operation
// (+,-,*,/,%)

let FirstNumber = +prompt("Enter First Number");
let SecondNumber = +prompt("Enter Second Number");

let sum = FirstNumber + SecondNumber;
document.write("Sum of two number is =" , sum , "<br/>") ;

let subraction = FirstNumber - SecondNumber;
document.write("subraction of two number is =" , subraction , "<br/>") ;

let multiplication = FirstNumber * SecondNumber;
document.write("multiplication of two number is =" , multiplication , "<br/>") ;

let division = FirstNumber / SecondNumber ;
document.write("division of two number is =" , division , "<br/>") ;

let Reminder = FirstNumber % SecondNumber ;
document.write("Reminder of two number is =" , Reminder , "<br/>") ;


Swal.fire("You Have Been Done");
