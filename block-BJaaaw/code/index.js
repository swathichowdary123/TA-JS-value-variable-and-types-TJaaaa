// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number=Number(prompt("enter a number"));
if(number%2===0){
  alert(`number is even`);
}
else{
  alert(`number is odd`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1=Number(prompt("enter first number"));
let num2=Number(prompt("enter second number"));
if(num1>num2){
  alert(`${num1} is greater`);
}
else{
  alert(`${num2} is greater`);
}
// 3. Convert the above code using`?` terniary operator
let numOne=Number(prompt("enter first number"));
let numTwo=Number(prompt("enter second number"));
numOne > numTwo ? alert(`${num1} is greater`):alert(`${num2} is greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName=Number(prompt("enter the house name"));
if(houseName==="stark"){
  alert(`winter is coming`);
}
else if(houseName==="lannister"){
  alert(`a lannister always pays his dept`);
}
else{
  alert(`all men must die`);
}

// 5. Convert the above code using`?` terniary operator
houseName==="stark" ? alert(`winter is coming`): houseName==="lannister" ?  alert(`a lannister always pays his dept`) : alert(`all men must die`);

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=Number(prompt("enter a month number"));
switch(month){
  case 1:
   alert("january");
   break;
  case 2:
    alert("february");
    break;
    case 3:
      alert("march");
      break;
     case 4:
       alert("april");
       break;
       case 5:
        alert("may");
        break;
       case 6:
         alert("june");
         break;
         case 7:
          alert("july");
          break;
         case 8:
           alert("august");
           break;
           case 9:
            alert("september");
            break;
           case 10:
             alert("october");
             break;
             case 11:
              alert("november");
              break;
             case 12:
               alert("december");
               break;
               default:
                alert("invalid month");
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery=prompt("enter the salary");
switch(true){
  case salery<=20000:{
    let taxedAmount = (salery*10)/100;
    alert(`your hand in amount ${salery-taxedAmount}`);
     break;
}

  case salery<=40000:{
    let taxedAmount=(salery*20)/100;
    alert(`your hand in amount ${salery-taxedAmount}`);
    break;
}
  case salery > 50000:{
    let taxedAmount=(salery*30)/100;
    alert(`your hand in amount ${salery-taxedAmount}`);
    break;
}
  default:
    alert("no tax is counted");   
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=Number(prompt("enter the marks"));
switch(marks){
  case marks>100:
    alert("marks cant be greater than 100");
    break;
   case marks>80 && marks<100:
    alert("grade A");
    break; 
    case marks>50 && marks<80:
      alert("grade B");
      break;
    case marks>30 && marks<50:
      alert("grade C");
      break;
    default:
      alert("grade D");
}
let grade=Number(prompt("enter the marks"));
if(marks>100){
  alert(`marks cant be greater thean 100`);
}
else if(marks>80 && marks<100){
  alert("grade A");
}
else if(marks>50 && marks<80){
  alert("grade B");
}
else if(marks>30 && marks<50){
  alert("grade C");
}
else{
  alert("grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt("what is the weather like outside");
switch(weather){
  case "sunny":
    alert(`wear a t-shirt`);
    break;
  case "rainy":
    alert(`dont forget t take your rain coat`);
    break;
  case "hot":
    alert(`get a hanky`);
    break;
  case "freezing":
    alert(`get your sweeeter on`);
    break;
  default:
    alert(`not a valid inupt`);
}
let weatherApp=prompt("what is the weather like outside");
if(weather="sunny"){
  alert(`wear a t-shirt`);
}
else if(weather="rainy"){
  alert(`dont forget t take your rain coat`);
}
else if(weather="hot"){
  alert(`get a hanky`);
}
else if(weather="freezing"){
  alert(`get your sweeeter on`);
}
else{
  alert(`not a valid inupt`);
}