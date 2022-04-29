// // Setup
// const contacts = [
//     {
//       firstName: "Akira",
//       lastName: "Laine",
//       number: "0543236543",
//       likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//       number: "0994372684",
//       likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//       firstName: "Sherlock",
//       lastName: "Holmes",
//       number: "0487345643",
//       likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//       firstName: "Kristian",
//       lastName: "Vos",
//       number: "unknown",
//       likes: ["JavaScript", "Gaming", "Foxes"],
//     },
//   ];
  
//   function lookUpProfile(name, prop) {
//     // Only change code below this line
    
//     for (let i=0 ; i < contacts.length; i++){
//         console.log(contacts[i].firstName);
//         if(contacts[i].firstName==name){
//           if(contacts[i][prop] !=""){
//             return contacts[i][prop];
//           }
//           else{
//             return "No such property"
//           }
//         }
           
//     }
//     return "No such contact"
  
//     // Only change code above this line
//   }
  
//   console.log(lookUpProfile("Akira", "likes"));


//// EJERCICIO DE RECURSION ///


// function countdown(n){
//   if(n < 1){
//     return [];
//   }
//   else{
//     let countDown = countdown(n-1);
//     countDown.unshift(n);
//     return countDown;
//   }
  
// }

// console.log(countdown(5));


//// EJERCICIO DE RECURSION 2 ///

function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return[];
    }
   else{
 
   let array = rangeOfNumbers(startNum, endNum-1);
   array.push(endNum);
   return array;
 
   }
 };

console.log(rangeOfNumbers(1,9));

