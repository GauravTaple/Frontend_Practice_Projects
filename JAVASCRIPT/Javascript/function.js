// function addTwoNumbers(num1,num2){
//     return(num1+num2);
// }
//  const result = addTwoNumbers(5,5);

//  console.log(result,'result');



function isLoggedin (username){
    if(!username){
        console.log("Please enter a number");
        return
    }
    return `${username} just logged in`
}
console.log(isLoggedin('Gaurav'));

console.log(isLoggedin());