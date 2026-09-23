import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {
    return (
        <div>
            <h2>Dashboard page</h2>
            <Counter></Counter>
            <ul>
                <li>Item - 1</li>
                <li>Item - 2</li>
                <li>Item - 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;