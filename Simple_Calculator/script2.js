const num1 = Number(prompt("num1: "));
const num2 = Number(prompt("num2: "));
let opt = prompt("opt: ");
let result;

if(opt === "+"){
    result = (num1) + (num2);
} else if(opt === "-"){
    result = num1 - num2;
} else if (opt === "*"){
    result = num1 * num2;
} else if (opt === "/"){
    if(num2 === 0){
        result = "Error:Division by zero";
    }else{
        result = num1 / num2;
    }
}else if(opt === "%"){
    result = num1 % num2;
}else if(opt === "**"){
    result = num1 ** num2;
}else{
    result = "Invalid opt!";
}

console.log("Result:", result);