// control structure practise 

// let number_less_greaterthan_zero = 0;
// if(number_less_greaterthan_zero < 0){
//     console.log("number is smaller than zero ");
// }


//checking the number is zero or grater than zero or less than zero.

// let number = 24;

// if(number ===0){
//     console.log("Number is Zero ");
// }else if(number < 0){
//     console.log("number is smaller than Zero ");
// }else if(number > 0){
//     console.log("Number is greater than number ");
// }

// switch case statement 

// let name1 = "ashoka";
// switch(name1) {
//          case "ashoka": 
//             console.log("This is an Ashoka home.");
//          break;
//          case "suraj" : 
//          console.log("this is an suraj home");
//          break; 
//          case "onkar" : 
//          console.log("this is an onkar home");
//          break; 
//          case "om" : 
//          console.log("this is an om home");
//          break; 
//          case "ashutosh" : 
//          console.log("this is an shutosh home");
//          break; 
//          default :
//            console.log("something went wrong ..")
// }





 const day = 1;

 const result = (day) => {
      switch (day) {
        case 1:
            return "Monday";
        case 2: 
            return "tuesday";
        case 3:
            return "tuesday";
        case 4 :
            return "thursday"
        default:
            return "Went wrong..";
      }
 }

console.log(result(day));
