// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("FOR LOOP", i);
}

// DO WHILE LOOP
let i = 1
do {
    console.log("DO WHILE LOOP", i);
    i++
}
while (i <= 5);

// WHILE LOOP

let i2 = 1;
while (i <= 5) {
    console.log("WHILE LOOP", i)
    i++;
}