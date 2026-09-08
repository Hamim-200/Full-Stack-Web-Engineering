// // callback
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))


// // async await

// async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     return data;
// }


// const loadData2 = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json()
//     return data;
// }

import { use } from "react"
import UserCard from "./UserCard";


function Users({ usersDataPromise }) {
    const users = use(usersDataPromise);
    console.log(users);

    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <UserCard user={user} />)
            }
        </div>
    )

}

export default Users