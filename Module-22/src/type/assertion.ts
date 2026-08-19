let value : unknown;

// value.toUpperCase(); // Error: Object is of type 'unknown'.

let myValue = value as string; // Type assertion

const uppi = myValue.toUpperCase();
const yourValue = value as number;
yourValue.toFixed();

let data: unknown;
interface User{
    name: string;
    email?: string;
}

const userData = data as User;
userData.name;

// as const
const kamruzzaman: User = {
    name: 'Kamruzzaman Karmuzzaman',
    email:'kam@sizerland.com'
} as const;