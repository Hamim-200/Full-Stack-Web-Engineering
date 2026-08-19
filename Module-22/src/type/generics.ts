interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200
};

const transactionStatus: Response<boolean> = {
    data: false,
    status: 200
}

const transactionAmount: Response<number> = {
    data: 215,
    status: 401
}


function getLength<item>(array: item[]): number {
    return array.length;
};

getLength<string>(["apple", "banana", "cherry"]); // returns 3
getLength<number>([1, 2, 3, 4, 5]); // returns 5