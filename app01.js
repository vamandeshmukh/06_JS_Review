// problem with async programming 

// const getTodo = () => {
//     setTimeout(() => {
//         return { text: 'Complete Code Example' }
//     }, 2000);
// }
// const todo = getTodo();
// console.log(todo.text);

// Solution 1 - using callbacks 

// const getTodo = callback => {
//     setTimeout(() => {
//        callback ({ text: 'Complete Code Example' })
//     }, 2000)
// }
// getTodo(todo => {
//     console.log(todo.text)
// })

// Solution 2 - using callbacks - more explanation 

// const getTodo = callback => {
//     setTimeout(() => {
//        callback ({ text: 'Complete Code Example' })
//     }, 2000)
// }
// getTodo(todo => {
//     console.log(todo.text)
// })
// console.log("This is the first output")

// Solution 3 - using Promise 

// const getTodo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;
//             if(!error)
//                 resolve({ text: 'Complete Code Example' })
//             else
//                 reject()
//         }, 2000)     
//     })
// }
// getTodo().then(todo => {
//     console.log(todo.text)
// })

// Solution 3 - using Promise - adding catch() 


const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true; // true
            if(!error)
                resolve({ text: 'Complete Code Example' })
            else
                reject()
        }, 2000)     
    })
}
getTodo()
    .then(todo => {
        console.log(todo.text)
    })
    .catch(error => {
        console.log("Error occurred")
    })