import UserCart from "./UserCart";

interface User {
    name: string;
    isLoggedIn: boolean;
}

const users: User[] = [
    { name: "Alice", isLoggedIn: true },
    { name: "Bob", isLoggedIn: false },
    { name: "Charlie", isLoggedIn: true },
];


export default function Users() {
    return (
        <div>
            {
                users.map(user => <UserCart name={user.name}></UserCart>)
            }
        </div>
    )
}
// export default function Users(){
//     return (
//         <div>
//            {
//             users.map(user => <li>{user.name}</li>)
//            }
//         </div>
//     )
// }

