//For In Loop
let marks={
    ahsaan:60,
    mannan:70,
    hannan:60,
    hashir:90
}
 for(let a in marks){
     console.log("Marks of "+a+" is: "+marks[a]);
}

//For Of Loop
let arr=["Car","Bike","Truck"]
for(let b of arr){
         console.log(b);
}

// For Each Loop
let array = [2, 3, 4, 5, 6];
array.forEach((element) => {
    console.log(element * element);
})

// Array.from()
let name = "Muhammad Ahsaan"
let nameArray = Array.from(name);
console.log(nameArray);

// For In Loop For Arrays       For in loop return indexes of the array
let array2 = [12, 13, 14, 15, 16];
for (let index in array2) {
    console.log(index);
}

// For Of Loop For Arrays       For of loop return value of the index
let array3 = [212, 213, 214, 215, 216];
for(let i of array3){
    console.log(i);
}