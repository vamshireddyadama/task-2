/*Question 2: Create three functions that take a number, multiply it by 2,
subtract 3, and then add 10. Use callbacks to chain these operations together.*/-

function add(num) {
    return num+10;
}
function sub(num,callback) {
    callback(num-3);
}
function mul(num,callback) {
    callback(num*3);
}


mul(100,(num)=> {
    sub(num,(num)=>{
        console.log(add(num));
    })
})