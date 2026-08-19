// function useState(initialValue) {
//     let value = initialValue;

//     function setValue(newValue) {
//         value = newValue;
//     }

//     return [value, setValue]
// }


// const [counter, setCounter] = useState(0);

// console.log(counter)


function useState<T>(initialValue: T) {
    let value = initialValue;
    function setValue(newValue: T) {
        value = newValue;
    }

    // return [value]
    return [value, setValue]
}

useState<string>("Hello World");
useState<number>(42);
useState<boolean>(false)


interface User {
    email: string,
    isLoggedIn: boolean
}

useState<User>({ email: "user@example.com", isLoggedIn: false });
useState<User | null>(null);