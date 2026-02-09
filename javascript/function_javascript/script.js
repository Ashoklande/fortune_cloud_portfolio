// function with its type 

// 1) name function 

// function add(a,b){ // this is parametarized function.
//     console.log(a+b);
// }

// add(2,4);


// ananomous function 


// (function(a,b){
// console.log(a+b);
// }
// (3,5))


// IIEF (immediatly invoked function expression)


// (function(a,b){
//     console.log(a+b)
    
// })(2,4)

// (function (){
//     console.log("This is an IIEF function.");
    
// }) ()

// arrow function 


// let add=(a,b)=>{
//   console.log(a+b);
  
// }

// add(3,5)


//nested function 

// function grandparent(){
//     console.log("I am Grandparent.")
//      function parent(){
//         console.log("I am parent.")
//         function child(){
//             console.log("I am child ");
            
//         }
//         return child;
//      }
//      return parent;
// }

// const child = grandparent()();
// child();



//callback function
// callback function is a function in that we pass another function as a argument 

function great(name , callbak){
        callbak(name);
}

great("Ashok" , function(name){
    console.log("Hi "+ name )
})


// 