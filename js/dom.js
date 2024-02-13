console.log(document.title);

document.title = 'DOM';
console.log(document.title);
// Using document object, we can gain control of the html inside js

console.log(document.body);
document.body.innerHTML = 'New Text';

// We can repalce normal text with HTML too

document.body.innerHTML = '<button>Submit</button>'

document.querySelector('button').innerHTML = 'New button';
// document.querySelector('#button-id') // selecting an element by its id
//document.querySelector('.button-id') // selecting an element by its class

