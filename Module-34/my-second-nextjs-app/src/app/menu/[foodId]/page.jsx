import React from 'react';

const FoodDetailPage = async ({ params }) => {

    const { foodId } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);

    const data = await res.json();
    const { dish_name, origin_and_popularity, image_link } = data.data;
    console.log("Food data", data)

    return (
        <div>
            <h2>Food Details : {foodId}</h2>
            <div>
                <h3>{dish_name}</h3>
                <h2>{origin_and_popularity}</h2>
            </div>
        </div>
    );                 
};

export default FoodDetailPage;