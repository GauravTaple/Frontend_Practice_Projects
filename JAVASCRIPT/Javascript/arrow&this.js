function chai(){
    let user ="gaurav";
    console.log(this.user);
    console.log(this);
}
chai();

console.log('---------using arrow function-------------')

const chai1 = () => {
    let user1='sharda'
    console.log(this.user1);
    console.log(this);

}
chai1();