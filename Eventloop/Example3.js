console.log("Start");
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("setTimeout inside Promise"), 0);
});
Promise.resolve().then(() => console.log("Promise 2"));
setTimeout(() => console.log("setTimeout 2"), 0);
console.log("End");
