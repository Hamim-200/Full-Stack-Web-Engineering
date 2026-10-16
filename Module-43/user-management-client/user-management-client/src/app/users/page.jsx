import React, { Suspense } from 'react';
import Users from '../components/Users';


const UserPromise = async () => {
    const data = await fetch('http://localhost:5000/users');
    const users = await data.json();
    return users;

}
const UserPage = async () => {

    return (
        <div>
            <h2>Users Data coming soon :</h2>
            <Suspense fallback={<h2>Loading.....</h2>}>
                <Users UserPromise={UserPromise}></Users>
            </Suspense>
        </div>
    );
};

export default UserPage;