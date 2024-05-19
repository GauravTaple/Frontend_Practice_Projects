// IIFE (Immediate Invoked Function Expression)

(function chai(){
    console.log("Yes Connected");
})();

((name) =>{
    console.log(`Again Connected ${name}` );
})('Gaurav')
