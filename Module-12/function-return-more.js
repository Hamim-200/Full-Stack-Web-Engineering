function isEven(number){
    if(number %2 === 0){
        return true;
    }
    else{
        return false;
    }
}

const result = isEven(24);
console.log('is Even', result);


function isOdd(number){
    if(number %2 === 1){
        return true;
    }
    else {
        return false;
    }
}

const result2 = isOdd(78);
const result3 = isOdd(89);