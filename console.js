// .log
console.log("Hello World")

// .assert
console.assert(5<2)

// .clear
// console.clear()

// .error
console.error("Error Generated")

// .table
let marks={ahsaan:40,saqib:45,talal:38,moiz:42}
console.table(marks)

// .warn
console.warn("Don't do this")

// .info
console.info("Hey this is mack")

// .time & .timeEnd
console.time("forLoop")
for(let i=0;i<500;i++){
    console.log(i);
}
console.timeEnd("forLoop")