/*
const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

// handle the promise
promise.then(() => {
    console.log('Promise consumed..');
});

console.log('Hello from global scope');

// Calling then directly on new Promise()
new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Async task complete');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise consumed..');
});

// Returning data from promise
new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('Async task complete');
        resolve({name: 'John', age: 36});
    }, 1000);
}).then((user) => {
    console.log(user);
});
*/

// reject a promise in case of an error
/*
new Promise((resolve, reject) => {
    setTimeout( () => {
       let error = true;
       if(!error) {
            resolve({name: 'John', age: 36});
       } else {
            reject('Error: Something went wrong');
       }
    }, 1000);
}).then((user) => {
    console.log(user);
}).catch(error => console.log(error))
.finally(() => console.log('Promise has been either resolved or rejected'));
*/
// Promise Chaining

new Promise((resolve, reject) => {
    setTimeout( () => {
       let error = true;
       if(!error) {
            resolve({name: 'John', age: 36});
       } else {
            reject('Error: Something went wrong');
       }
    }, 1000);
})
.then((user) => {
    console.log(user);
    return user.name;
})
.then(name => {
    console.log(name);
    return name.length;
})
.then(name_len => {
    console.log(name_len);
})
