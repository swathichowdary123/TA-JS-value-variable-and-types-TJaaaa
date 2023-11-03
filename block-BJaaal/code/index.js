//  Template literal

/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.
- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
*/

let firstName = "Arya";
let lastName = "Stark";

/* Do the following using `+` operator
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/

/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/

let amount = 200;
const taxPercent = 10;

/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/

/* Use double quote and escape character:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/
const username="swathi";
let bio;
bio="learning to code";
alert(`I am swathi` + `my bio is learing to code`);
alert(`I'm ${firstName} ${lastName} of winterfell`);
alert(`the total amount is 200`);
alert(`the tax amount is ${(amount*taxPercent)/100}`);
alert(" `the total amount is ${amount}` ");
alert("`the tax amount is ${(amount*taxPercent)/100}`");