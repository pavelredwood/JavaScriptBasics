// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );
};
// The answer: 1.

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).


for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  };

let x = 0;  
while (x<3) {
    alert(`number ${x}`);
    x++;
}