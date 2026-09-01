function f1() {
    console.log("F1");
}

function f3() {
    console.log("F3");
}

console.log("Main Start");

setTimeout(f1, 50);

setTimeout(f3, 30);

new Promise((resolve, reject) => {
    console.log("Promise Created");

    resolve("Promise Resolved");

    reject("Promise Rejected"); // Ignore hoga

}).then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

console.log("Main End");