/*Question 1: Write a function greet that takes a name and a callback function.
The function should return a greeting message by calling the callback with
the message.*/

function greet(msg,callback) {
    callback(msg)
}
greet("hello",(msg)=>{
    console.log(msg);
})
