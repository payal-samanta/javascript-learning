let mark = parseInt(prompt("Enter your mark: "));
 
if(mark>100 || mark<0 || mark===isNaN ){
    console.log("input is invalid");
}else if(mark >= 90){
    console.log("A");
}else if(mark > 80 && mark < 89){
    console.log("B");
}else if(mark >70 && mark < 79){
    console.log("C");
}else if (mark > 60 && mark <69){
    console.log("D");
}else if(mark > 50 && mark < 59){
    console.log("E");
}else{
    console.log("F")
}
