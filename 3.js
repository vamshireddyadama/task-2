/*Question 3: Write a function delayedMessage(message, delay) that prints the
message after the specified delay using setTimeout. Use a callback for when
the message has been printed.
*/

function delayedMessage(message,delay) {
    setTimeout(()=> {
        console.log(message);
        
    },delay)
}
delayedMessage("timeout",1000)