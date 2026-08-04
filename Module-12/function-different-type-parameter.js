function chowdurify(name) {
    const fullName = name + ' ' + 'Chowdury';
    return fullName;
}

// const robinChow = chowdurify('Robin');
// console.log(robinChow);

// const shamimChow = chowdurify('Shammi');
// console.log(shamimChow);

function fullName(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    return fullName;
}

// const mohabbat = fullName('Mohobbat', 'Ali')
// console.log(mohabbat);

function doubleOrHalf(price, isDouble) {
    if (isDouble === true) {
        const askingPrice = price * 2;
        return askingPrice;
    }
    else {
        const askingPrice = price / 2;
        return askingPrice;
    }
}

// const myPrice = doubleOrHalf(100, true);
// console.log('price for Mango People', myPrice);
// const leaderPrice = doubleOrHalf(100, false);
// console.log('price for leaders', leaderPrice)


function firstElementDouble(array) {
    console.log('got the parameter value', array)
    const firstElement = array[0];
    const doubled = firstElement * 2;
    return doubled;
}

const numbers = [45, 8, 7, 541, 69, 12];
const doubled = firstElementDouble(numbers); 

console.log('double of the first element', doubled)


const student = {
    name: 'Monir Abdul',
    id: 15,
    marks: 75
}

function isStudentAPlus(student){
    // console.log('got the student', student)
    const marks = student.marks;
    console.log('his marks', marks);
    if(marks >= 80){
        return true;
    }
    else {
        return false;
    }
}

const isAPlus = isStudentAPlus(student);