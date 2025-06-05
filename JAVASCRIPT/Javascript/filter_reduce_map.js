//------- Filter ----------------------- 
const arr1 =[0,1,2,3,4,5,6,7,8,9]

// const values = arr1.filter((val) => val >= 5)
// console.log(values);


// const values = arr1.filter((item)=>{
//     return item <= 5
// })
// console.log(values);

// ------------------ map ------------------
// const Numbers = [0,1,2,3,4,5,6,7,8,9]
// const Num = Numbers.map((i) => i+10)
// console.log(Num);


//-------------- chaining ------------------
// const Numbers1 = [0,1,2,3,4,5,6,7,8,9]

// const Values = Numbers1
//                .map((item)=>item*10)
//                .map((num)=>num+1)
//                .filter((vals)=>{ 
//                 return vals>50
//             })

// console.log(Values);

//--------------- reduce ------------------------
const MyNums = [1,2,4,6,8,10] 

const MynumsAgain = MyNums.reduce ((acc,currVal)=>{
    console.log(`acc ${acc} and currVal ${currVal}`);
    return (acc + currVal)

},3)
console.log(MynumsAgain);
