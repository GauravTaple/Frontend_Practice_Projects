// Generate a random color

const randomColor = function(){
    const hex="0123456789ABCDEF";
    let color= "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
};

let IntervalId;

const startChangingColor = ()=>{
    console.log("started");
    if(IntervalId == null){
        IntervalId = setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor =()=>{
    console.log("stopped");
    clearInterval(IntervalId);
    IntervalId=null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)
