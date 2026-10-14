// একটি function িদেয় user login check কেরা। 

function login(
    inputEmail: string,
    inputPassword: string,
    savedEmail: string,
    savedPassword: string
): boolean {
    return inputEmail === savedEmail && inputPassword === savedPassword;
}
console.log(login("a@email.com", "1234", "a@email.com", "1234")); // true