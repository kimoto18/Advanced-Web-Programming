/*
fetch('./movies.json')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
});

fetch('./movies.json')
    .then(response => response.json())
    .then(data => console.log(data))


fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => console.log(data))
*/

// Getting data only for ivey
fetch('https://api.github.com/users/ivey')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => document.querySelector('h1').textContent = data.login);