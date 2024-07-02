/* function myfunc() {
    console.log("hellllllo");
}
setTimeout(() => myfunc(),4000); */

/* let mypromise = new Promise(function(resolve, reject) {
    resolve(); // success
    reject(); // error
})

// 3 states --> Pending, Fulfuilled, rejected
mypromise.then(
    function(value) {
        console.log("Success");
    },
    function (error) {
        console.log("Error");
    }
) */

async function myfunc(params){
    return "Hello world";
}

myfunc().then(
    function(value) {console.log("success")},
    function(error) {console.log("error")},
)

function myfunc2(params){
    return Promise.resolve("hello world");
}
myfunc2().then(
    function(value) {console.log("success")},
    function(error) {console.log("error")},
);



