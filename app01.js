
const fun = () => {
    setTimeout(() => {
        return { message: 'Hi' }
    }, 2000);
}
const hi = fun();
console.log(hi.message);

