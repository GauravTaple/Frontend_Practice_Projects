const languages = ["python","java","ruby","react","javascript"]

//-------- 1st way ---------------------
// languages.forEach(function (item){
//     console.log("item:-" + item);
// })

//--------- 2nd way ------------------------
// languages.forEach((item) => {
//     console.log("item:->"+item);
// })


languages.forEach((item,index,array) => {
    console.log(item);
    console.log(index);
    console.log(array);
})