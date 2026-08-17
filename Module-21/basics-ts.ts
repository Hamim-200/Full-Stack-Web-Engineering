const brand: string = 'Apple';

if (brand === 'samsung') {
    const isExpensive: boolean = true;
}


// inference : implicit
for (let i: number = 0; i < 10; i++) {
    console.log(i);
}

const letters: string[] = ['a', 'b', 'c'];

for (const letter of letters) {
    console.log(letter.toUpperCase());
}