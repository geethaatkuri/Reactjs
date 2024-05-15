// 1. let, var and const

function check(){
    let a = 10;
    if(true){
    let a = 20; 
    console.log(a); //20
}
console.log(a); //10
}

function checks(){
    var a = 10;
    if(true){
        var a = 20;
        console.log(a); //20
    }
    console.log(a); //20
}


//2. Destructing -> This comes with objects('key: value' pair) 
// Destructing is simply implies breaking down a complex structure into simpler parts

const biodata = {myName: 'abcd', age: 22, bornIn: 'India'}

// const myName = biodata.myName;
// const age = biodata.age;
// const bornIn = biodata.bornIn;

const {myName, age, bornIn} = biodata;


//3. Template String 

let show = 'my name is '+myName+ 'my age is '+age+ 'I was born in '+bornIn;
console.log(show);

//Now using Template string 
let showValue = `my name is ${myName}, my age is ${age} and I was born in ${bornIn}`;
console.log(showValue);


//4. Default arguments
function funAge(age){
    return age;
}
funAge();

function funAges(age=18){
    return age;
}
funAges();


//5. Object Properties
const defaultVal = {myName : myName, age : age, bornIn : bornIn}
console.log(defaultVal);

const shortObj = {myName, age, bornIn}
console.log(shortObj);



//Functions

function addSum(a,b) { //here a, b are parameters
    return a + b;
}

addSum(25, 9); //here 25,9 are arguments


//6. Arrow Function ->  is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make the code more structured and readable. Arrow functions are anonymous functions i.e. functions without a name but they are often assigned to any variable.
let add = (a, b) => {
    return a + b;
}
add();