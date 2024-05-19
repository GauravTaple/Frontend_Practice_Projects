const user = {
    username:'gaurav',
    isLoggedIn:true,
    age:30,

    getUserDetails:function(){
        // console.log('Got user from database');
        console.log(this);
        console.log(`AGE:${this.age}`);
    }
}

console.log(user.username,'---------');
console.log(user.getUserDetails(),'*********');
console.log(this);

// ------------------------------------------------------------------

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    // return this;
}

// new keyword create every time new instance
const promiseOne = new User('gaurav',5,true);
const promiseTwo = new User('Sonu',10,false);


console.log(promiseOne,'///////////////////');
console.log(promiseTwo,'///////////////////');
