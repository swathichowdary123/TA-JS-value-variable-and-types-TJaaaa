// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age=Number(prompt("enter the age"));
if(age>12 && age<55){
  alert(`you can participate in the marathon`);
}
else if(age>4 && age<11){
  alert(`you are too young to participate`);
}
else if(age<4){
  alert(`hey kiddo! can you walk`);
}
else{
  alert(`you are too old to participate in the marthon`);
}
// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n=prompt("enter a positive integer");
let result='h'+'e'.repeat(n)+'llo';
alert(result);
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let n1=Number(prompt("enter a number"));
let sum=0;
for(i=0; i<n; i++){
  sum+=i;
}
alert(`the sum of n natural numbers are:${sum}`);
/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let number=Number(prompt("enter a number"));
switch(true){
  case number=1:{
    alert(ONE);
  }
  case number=2:{
    alert(TWO);
  }
  case number=3:{
    alert(THREE);
  }
  case number=4:{
    alert(FOUR);
  }
  case number=5:{
    alert(FIVE);
  }
  case number=6:{
    alert(SIX);
  }
  case number=7:{
    alert(SEVEN);
  }
  case number=8:{
    alert(EIGHT);
  }
  case number=9:{
    alert(NINE);
  }
  default:
    alert(`PLEASE TRY AGAIN`)
}
/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks=prompt("enter the marks");
switch(marks){
  case marks>90:{
    alert(`your grade is AA`);
  }
  case marks>80 && marks<=90:{
    alert(`your grade is AB`); 
  }
  case marks>70 && marks<=80:{
    alert(`your grade is BB`);
  }
  case marks>60 && marks<=70:{
    alert(`your grade is BC`);
  }
  case marks>50 && marks<=60:{
    alert(`your grade is CC`);
  }
  case marks>40 && marks<=50:{
    alert(`your grade is CD`);
  }
  case marks>30 && marks<=40:{
    alert(`your grade is DD`);
  }
  default:{
    alert(`your grade is FF`);
  }
}
/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let num1=Number(prompt("enter the first number"));
let num2=Number(prompt("enter the second number"));
if(num1>num2){
  alert(`${num1}`);
}
else{
  alert(`${num2}`);
}
/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
let product1=Number(prompt("enter the product1"));
let product2=Number(prompt("enter the product2"));
let product3=Number(prompt("enter the product3"));
let product=num1*num2*num3;
if(product>0){
  alert(`the product is positive(+)`);
}
else if(product<0){
  alert(`the product is negaive(-)`)
}
else{
  alert(`the product is (0)`);
}
/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let num=Number(prompt("enter the first number"));
let num0=Number(prompt("enter the second number"));
if(number==="+"){
  let result=num1+num2;
  alert(result);
}
else if(operation==="-"){
  if(num1<num2){
    alert("number two is larger than number two");
  }
  else{
    let result=num1-num2;
    alert(result);
  }
}
else if(operation==="*"){
  let result=num1*num2;
  alert(result);
}
else if(operation==="/"){
  if(num1<num2){
    alert("number two is larger than number two");
  }
  else{
    let result=num1/num2;
    alert(result);
  }
}
else{
  alert(`invalid operation`);
}