'use client'

import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        console.log("Increase Btn clicked")
        setCount(count + 1)
    }

    console.log("Counter Component render");
    return (
        <div>
            <h2 className='text-4xl font-bold mb-4'>Counter : {count}</h2>

            <button onClick={handleIncrease} className='bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-2xl'>Increase</button>


        </div>
    );
};

export default Counter;