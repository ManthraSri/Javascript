// //SINGLE THREADED OPERATION
// console.log ('start')
// function add (a,b){
//  return a+b;
// }
// const result = add(2,3)
// console.log(result);
// console.log('end')


//ASYNCHRONOUS OPERATION
console.log('start')
setTimeout(()=>{
    console.log("middle")
},2000);
console.log('end')