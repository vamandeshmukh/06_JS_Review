// problem 1 
// const fun = () => {
//     setTimeout(() => {
//         return { message: 'Hi' }
//     }, 2000);
// }
// const hi = fun();
// console.log(hi.message);

// TypeError: Cannot read property 'message' of undefined

// Solution 1 - callback 

// const fun = callback => {
//     setTimeout(() => {
//         callback({ message: 'Hi' });
//     }, 2000);
// }
// fun(hi => {
//     console.log(hi.message);
// });
// console.log("first output");

// Solution 2 - Promise 

// const fun = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = true;
//             if (!error) // (error === false) 
//                 resolve({ message: 'Hi' });
//             else
//                 reject();
//         }, 2000);
//     });
// }
// fun().then
//     (hi => {
//         console.log(hi.message);
//     })
//     .catch(error => {
//         console.log("Error has occured.");
//     });

// let myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         if (false)
//             resolve("Success!")
//         else
//             reject("Error!")
//     }, 500)
// })
// myFirstPromise.then((successMessage) => {
//     console.log("Yay! " + successMessage)
// }).catch((errorMessage) => {
//     console.log("Ohoo " + errorMessage)
// })

// Solution 3 - async / await 

const fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (!error) // (error === false) 
                resolve({ message: 'Hi' });
            else
                reject();
        }, 2000);
    });
}

async function getFun() {
    try {
        const hi = await fun();
        return hi;
    } catch (error) {
        console.log("Something is wrong!")
    }
}

getFun()
    .then(hi => {
        console.log(hi.message);
        console.log("then block 1")
    })
    .then(() => {
        console.log("then block 2");
    })
    .then(() => {
        console.log("then block 3");
    })
    .catch(() => {
        console.log("Error!")
    });





