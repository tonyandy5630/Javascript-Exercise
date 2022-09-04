const promise1 = (time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`this is promise 1 at ${Date.now -now}`), time)
})

const promise2 = (time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`this is promise 1 at ${time}`), time)
})

const promise3 = (time) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`this is promise 1 at ${time}`), time)
})

const now = Date.now()

const promiseAll = Promise.all([promise1(3000), promise2(2000), promise3(3000)])
    .then(values => { console.log(values) })