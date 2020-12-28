
// let firstName = 'Vaman';
// let fullName = `${firstName} Deshmukh`;
// let message = `My name is ${fullName} and I live in Hyderabad.`;
// console.log(message);


// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(5 )); // NaN
// console.log(multiply(5, 2)); // 10
// console.log(multiply(5, 10, 20));    // NaN !

// function multiply(a, b = 1) {
//     return a * b;
//   }

//   console.log(multiply(5, 2)); // 10
//   console.log(multiply(5));    // 5


// function sum(...theArgs) {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }

// console.log(sum(1, 2, 3));
// // expected output: 6

// console.log(sum(1, 2, 3, 4));
//   // expected output: 10


  function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  





