const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(
            {
                name: 'John',
                age: 32
            }
        )
    }, 1500)
});

//promise.then( data => console.log(data));

async function getPromise() {
    const response = await promise;
    console.log(response);
}

//getPromise();

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

//getUsers();

const getPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json();
    console.log(data);
}
//getPosts();

// Try-Catch for error handling in async await
const getUsers1 = async () => {
    try {
        const response = await fetch('https://httpstat.us/404');
        const data = await response.text();

        if(!response.ok){
            throw new Error('Request Failed');
        }
        console.log(data);
    }catch(error) {
        console.log(error);
    }
};

//getUsers1();

try{
    console.log(x);
}catch (error) {
    console.log('Error: ' +error);
}

//console.log(y);

function double(number) {
    if(ifNaN(number)) {
        throw new Error('Please only enter numbers');
    }
    return number*2
}

//console.log(double(5));
try {
    console.log(double('hi'));
} catch(error) {
    console.log(error);
}
console.log('After error')

//const num = double('hello');
//console.log(num / 5);

// Multiple promises with async await 
async function getMultipleDataWithFetch() {
    const users_response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users_data = await users_response.json();

    const posts_response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts_data = await posts_response.json();

    const comments_response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments_posts = await comments_response.json();

    console.log(users_data, posts_data, comments_data)
}
//getMultipleDataWithFetch();

async function getMultipleDataWithPromiseAllThen() {
    const [users_resp, posts_resp, comments_resp] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
    ]);

    console.log(user_data, posts_data, comments_data);
}
getMultipleDataWithPromiseAllThen();
