// একটি unknown type variable declare কেরা এবং পের type check কের string হেল print কেরা। 

const value : unknown = "hello";
if(typeof value === "string"){
    console.log(value);
}