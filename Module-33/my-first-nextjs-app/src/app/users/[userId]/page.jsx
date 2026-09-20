import React from 'react';

const UserDetailPage =async ({params}) => {

    const {userId} = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

    return (
        <div>
            <h1>USER DETAILS PAGE</h1>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>

        </div>
    );
};

export default UserDetailPage;