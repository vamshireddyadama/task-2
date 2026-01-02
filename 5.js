/*Question 5: In a payment processing system, you need to:
Authenticate the user, verify the validity of the payment method, process
the payment, update the user’s account balance, and notify the user of the
payment result via email.
Design this payment processing system using callbacks to ensure that each
step occurs in the correct order.
*/
var details = {
    name : "vamshi",
    balance : 1000,
    email : "vamshi@gmail.com"
}
function  validate(name,callback) {
    callback(name)                                                                                                                                                                                                                                                                                                                                                                                                        
}