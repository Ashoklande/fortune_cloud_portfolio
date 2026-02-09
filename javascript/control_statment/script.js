// control statemnt

// control statement is used to control the flow of execution at specified condition

// there are two types

// 1) decision making / conditional statement
// we can evaluate the condition
// i)if
//    if(false){
//     console.log("HI this is an if block.");
//    }
// ii)  if else
// if(false){
//     console.log("this is an if statement .")
// }else{
//     console.log("this is an else block.")
// }

// iii) else if
// let num = 56;
// if(num % 2 === 0){
//     console.log("number divisible by 2.")
// }else if(num %3 ===0){
//     console.log("number is divisible by 3")
// }else if(num % 4 ===0){
//     console.log("Number is divisible by 4");
// }else if(num%5 ===0){
//     console.log("number is divisible by 5")
// }else{
//     console.log("number is not divisible by any number.")
// }

let mark = 40;

if (mark >= 35) {
  console.log("Pass ");
} else if (mark >= 50) {
  console.log("B grade pass");
} else if (mark >= 90) {
  console.log("A grade pass");
} else {
  console.log("failed ");
}

// iv) switch case statement

let day = "sunday";

switch (day) {
  case "sunday":
    console.log("Today is sunday.");
    break;
  case "monday":
    console.log("Today is monday.");
    break;
  case "tuesday":
    console.log("Today is tuesday.");
    break;
  case "thursday":
    console.log("Today is thursday.");
    break;
  case "friday":
    console.log("Today is friday.");
    break;
  case "saturtay":
    console.log("Today is saturday.");
    break;

  default:
    console.log("Something went wrong ...");
    break;
}

// 2) looping statement
// it is used for the repetation

// i) for loop
// when we know the count of iteration then we have to use iteration
//  syntax
//   for(initialization ; condition ; inc / dec){
//       ____________
//        __________   //block of code
//   }

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// ii) while loop /entry control loop
// if we dont know the the iteration , but we know the condition that time this loop use

// syntax :-
//   initialization ;
//   while (condition) {
//     inc/dec
//   }

let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}
// iii) do while loop /exit control loop

// here we have check condition first then it will execute block of code

// syntx -

//    do{
//        ---------
//        --------  //block of code
//        inc / dec
//    }

//    while(condotion)

let i = 0;
do {
  console.log(i);
} while (i <= 10);

// token

// combination keyword , identifier , value == token

// it is a smallest part of program
