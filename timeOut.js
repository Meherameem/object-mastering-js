function printNum(){
    console.log(333);
}
// console.log(222);
// printNum();
// console.log(444);

// console.log(222);
// setTimeout(printNum, 3000); //do after completing other commands,first parameter indicates which command should be executed using setTimeout and the second parameter which is optional indicates the delay ,i mean after how many milisecond(the unit is milisecond by default),the command should be executed.
// console.log(444);

console.log(222);
setTimeout(() =>{
    console.log('sorry for the delay')
}, 3000); //a function can be written in the place of first parameter.
console.log(444);

// console.log(222);
// setInterval(() => { //setInterval is for repeating stuff, use ctrl+c to stop executing
//     console.log('keep doing');
// }, 1000);
// console.log(444);