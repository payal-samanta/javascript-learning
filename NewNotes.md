## Variables

 -Declaring variable-
 1. let = which is not constant and can be change 
     also block scope means something out of this { } will not consider 
     for eg - { let number = 6}
              console.log(number)

              output will not be 6 
 2. const = whichis constant for that particular for the whole scnerio (frozen)
      it is also a block scope and also immutable reference - not frozen for object or array 
      for eg - let person {name: "payal" , age: "21"};
          age:"22"; - allowed 
         BUT
          person = {name:"Sam",age: "22"}; - not allowed 
       -- we can only chnage the properties not the not the actual reference

 -Data types-
 1. Primitive- 
    1. string - more than one character                     character = "a"  - a single thing it can be anything 
                eg - "PAYAL" , "KESHAV"
    2. number - it is any integer ... a number but have limit depend on the bit of computer
    3. boolean - it is either these or that 
               eg- true or false, 0 or 1 
                  1 - true
                  2- false
    4. null - developer define it as null (empty value)
              eg- let b = null;
                  console.log(b);  // null -- no value will print
    5. undefined - js automatically define it as null
             eg- let a;
                 console.log(a);  //undefined -- because we never assign it

    {undefined → “I don’t know yet” (automatic).
     null → “I know, and the value is nothing” (intentional).}

    6. symbol - to create unqine value
               eg- student.id = 101;
                    
                  let myID = Symbol("id");
                  student[myId]= 202;

                  console.log(student);
                  // id:101, [Symbol(id)]:202
    7. bigint- for larger number which have no limit 

2. Non-Primitive/reference- 
   1. Array - [1,2,3] 
         for similar type of string 
   2. Object - store value with reference, 
           {key : value}  
           eg - let users{
             name: "payal" , age: "21"
             name: "keshav", age: "20"
             name: "piyush", age: "11"
           }

           console.log(users[0].name); // Payal
           console.log(users[1].age); // 20
    3. function - it help to give a particular task... instead of writing the same code again and again we can declare a function 
        syntax- 
           function functionName(parameters) {   //parameters-a variable/input value  -- declaring fucntion 
            // code to be executed
            return result;  // optional
            }

           functionName();    -- calling function 

## Condition Statment
 - contol the flow of execution based on certain condition ... mtlb ya to ye nhi to vo 

   1. if statment- only runt the code it condition is true
      syntax- if(condition){
        //code to run if condition is true
      }
      eg- let age: 20;
          if(age>18){                               
            console.log("you are an adult");
          }
          output -  you are an adult
   2. if...else statment- if condition is true, first block run ...otherwise next block run 
       syntax- if(condition){
        //code it true
       } else{
        //code if false
       }

    eg- let age = 16;
        if(age>=18){
            console.log("you are eligible for vote")
        }else{
            console.log("you are below 18")
        }
   3. if...else if...else
      syntax- if(condition){
        //code run if true
      }else if{
        //
      }else{

      }
    4.switch..case - use for many possible condition jese weeks,month,grading,etc.
      syntax-switch(expression){
        case value1:
        //code it expression === value1
        break;
        case value2:
        //code it expression === value2
        break;
        default:
        //code if no match
      }

## Loops-
   1. for loop - when i know the number of loop/repitation
      - initialization -  where the counter variable starts.
      - Condition - loop run while this condition is true.
      - Increment/Decrement - updates the counter variable.

      syntax-
      for(initialization; condition; increment/decrement){
        //code to run in each loop
      }
   
    2. while loop - when i don't know in advance how my time it will repeat.it keep runing as long as the condition is true
      syntax -
      while(condition){
        //code to run
      }

      eg- countdown 
      let count=5;
      while(count>0){
        console.log(count);
        count--;
      }

      output-
      5
      4
      3
      2
      1
    
    3. do...while loop - it is similar to while but the code run atleast once
      syntax - 
      do{
        //run the code
      }while(condition);

      eg-
      let num = 10;
      do{
        consol.log("it will run ")
      }while(num<5);

      output- it will run 

## Special loop Control
   1. break statment - it will exit/stop th eloop even it the condition is true
      eg- 
      for(let i=1; i<=10; i++){
        if(i===5){
            break;
        }
        console.log(i);
      }

      output- 
      1
      2
      3
      4
    
    2. continue statment - it used to skip the current itreation and jump to the next one without breaking the loop
       eg-
       for(let i=1;i<=10; i++){
        if(i===5){
            continue;
        }
        console.log(i);
       }
       
       output- 
       1
       2
       3
       4
       6
       7
       8
       9
       10
    