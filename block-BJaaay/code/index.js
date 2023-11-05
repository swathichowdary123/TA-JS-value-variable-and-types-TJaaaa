//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.

// Using `console.log` log all the evan values from 1 to 10.

// Using `console.log` log all the od values from 1 to 10.

// Calculate the sum of all numbers from 1 to 10.

// Log all the values from 1 to 10 using while loop

for(let i=1; i<10; i=i+1)
{
    console.log(i);
}

for(let i=1; i<10; i=i+1){
    if(i%2===0){
        console.log(i);
    }
}

for(let i=1; i<10; i=i+1){
    if(i%2!==0){
        console.log(i);
    }
}
let sum=0;
for(let i=1; i<10; i++){
    sum+=i;
}
console.log(sum);

let sum1=0;
let i=1;
while(i<10){
    sum1+=i;
    i++;
}
console.log(sum1);