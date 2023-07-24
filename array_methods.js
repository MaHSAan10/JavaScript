let arr = [1, 24, 6, 2, 65]

// toString()
let a = arr.toString();   // Convert the array into string
console.log(a);

// join()
let b = arr.join(" ");    // Convert the array into string and seperated the elements by given seperator
console.log(b);

// pop()
let num = arr.pop();  // Remove and returns the last element of the array
console.log(num);
console.log(arr);

// push()
arr.push(100)   // Add element at the last index of the array
console.log(arr);

// shift()
let num2 = arr.shift()    // Remove and returns the first element of the array
console.log(num2);
console.log(arr);

// unshift()
arr.unshift(50);    // Add element at the first index of the array
console.log(arr);

// concat()
let a1 = [1, 2, 3, 4, 5];
let a2 = [6, 7, 8, 9, 10];
let a3 = a1.concat(a2);   //Concatenate two or more arrays
console.log(a3);

// sort
let compare = (a, b) => {
    return a - b
}
let array = [23, 6, 8, 31, 5663, 234];
array.sort(compare);    // For sorting the array
console.log(array);

// reverse
array.reverse();     // To reverse the array
console.log(array);

// splice
let spliceArray = array.splice(1, 3, 70, 50, 301, 405);    // To remove the specific numbers and add the given numbers from the given index
console.log(array);
console.log(spliceArray);

// slice
let sliceArray = array.slice(2, 4);    // To get the numbers between the given indexes from the array
console.log(array);
console.log(sliceArray);

// map()        map function returns the new array
let numbers = [2, 3, 4, 5, 6, 7]
let squareNumbers = numbers.map((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value * value;
})
console.log(`New Array: ${squareNumbers}`);

// filter()     filter function returns the new array
let integers = [9, 3, 5, 8, 2, 10, 3, 4];
let evenIntegers = integers.filter((num) => {
    if (num % 2 == 0) return num;
})
console.log(integers);
console.log(evenIntegers);

// reduce()     reduce function returns the value
let data=[3,4,6,2,1]
let sum=data.reduce((num1,num2)=>{
    return num1+num2;
})
console.log(data);
console.log(sum);