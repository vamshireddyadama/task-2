/*Question 4: Write a function fetchDataWithCallback that simulates fetching
data from an API with a delay. Implement error handling in the callback,
allowing it to receive either a successful response or an error message.
Test the function by simulating both success and failure scenarios.*/

function fetchDataWithCallback(msg,delay,API,callback) {
    setTimeout(()=>{
        callback(msg,API)
    },delay)
}

fetchDataWithCallback("hii",false,1000,(msg,API)=>{
    if(API) {
        console.log("error");
    }
    else
        console.log(msg);
})