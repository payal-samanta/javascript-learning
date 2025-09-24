// Without default parameters
function greet(name){
    console.log("Hello" + name);
}

greet("payal");  //output- Hello payal
greet();        //output- Hello undefined


//With default parameters
function greet(name = "Guest"){
    console.log("hello" + name);
}

greet("payal");   //output- Hello payal
greet();         //output- Hello guest 

//Multipy default parameters
function introduce(name = "Anonymous", age= 18){
    console.log("Name: " + name, "age: " + age);
} 

introduce("Payal",22);    //Name: Payal, age: 22 
introduce("sam");        //Name:sam , age: 18
introduce();            //NAme: anonymous, age: 18

// Default parameters with expressions 
function add(a,b=10){
    return a+b;
}

console.log(add(5));  //5+10 =15
console.log(add(2,20));  //2+20 = 22 

//Extra arguments
function sum(a,b){
    console.log(a+b);
}

sum(1,2,3);   //1+2=3

//using function called as default
function getDefaultage(){
    return 21;
}

function introduce(name = "anonymous", age = getDefaultage()){
    
}