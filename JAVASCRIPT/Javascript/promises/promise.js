// // 1st way to create the promise
// const promiseOne = new Promise(function(resolve,reject){
//     //  some async operation here...
//     setTimeout(()=>{
//         resolve();
//         console.log("Async task is complete...!!!");
//     },1000)
// })

// // resolve is connected to then function it will aware the consumed part
// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// });
 
// // ---------------------------------------------------------------------------------------

// // 2nd way of creating a promise using Promise.resolve and Promise.reject
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('2nd way to create Async promise...!!!');
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log("async 2 way resolved");
// })

// // -------------------------------------------------------------------------------------

// // 3rd way of creating a promise using Promise.resolve and Promise.reject

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("3rd way async task...!!!");
//         resolve({username:'gaurav' , age:23});
//     },1000)
// })

// promiseThree.then((data)=>{
//     console.log(data,'data');
// })

// ------------------------------------------------------------------------------------

// 4th way of creating a promise using Promise.resolve and Promise.reject
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:'gaurav' , password:'123456789'})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
//     },1000)
// })

// const check = promiseFour.then((userData)=>{
//     console.log(userData,'userData');
//     return userData.password;
// }).then((password)=>{                   // chaining :-
//     console.log(password,'password');
// }).catch((error)=>{                    // error handled using catch
//     console.log(error,'error');
// }).finally(()=> console.log("The promise is either resolved or rejected"))

// console.log(check,'check---------');

// ------------------------------------------------------------------------------------

// 5th way of creating a promise using Promise.resolve and Promise.reject
// Consume promise using async and await 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({fname:'gaurav' , lname:'taple'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response,'response');
    } catch(error) {
        console.log(error,'error handled');
    }
}

consumePromiseFive()