import React, { use } from 'react';

const Users = ({ UserPromise }) => {
    const users = use(UserPromise());
    return (
        <div>
            <h2>Users in the components = {users.length} </h2>
            {
                users.map(user => <li key={user.id}>{user.name} - {user.email}</li>)
            }
        </div>
    );
};

export default Users;