let RandomNumber = parseInt(Math.random() * (1,11));
// console.log(RandomNumber);
for(let i = 0; i<=100; ){
    let num = parseInt(prompt("num is: "));
    if(num === RandomNumber){
        alert("correct");
        break;
    }else if(num > RandomNumber){
        alert("Number is greater");
    }else if(num < RandomNumber){
        alert("Number is smaller");
    }
}
