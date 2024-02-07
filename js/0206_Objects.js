// Primitives - Integers, Characters, Floats, strings,
// Higher order dtypes - arrays, functions, objects

// Objects - help us to group multiple values together
// Used to represent real-world entities. Ex: Person, product, bank account etc...
// Key-value pairs

/*
//// 1. Simple Person Object
const person = {
    name: "John",
    age: 28, 
    "full name": "John Doe",
    "skill-set": ['Jave', 'PHP']
}

//// Accessing object properties
console.log(person.name); //accessing via dot notation
console.log(person['name']); //accessing via square brackets

//// Accessing keys and values
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// Modify the value of a key
person['age'] = 34
console.log(person);

// Add a new property to person object
person['phone'] = '11-2222-3333'; // Key gets added if it doesn't exist
// 
console.log(person);

// Deleting an existing key
delete person ['age'];
console.log(person);

//// We can store any type of data inside an object
const product = {
    name: 'book',
    rating: {
        stars: 4, 
        count: 80
    },
    inStock: false,
    last_sold_units: [34, 45, 89],

    test_fun(){
        console.log('Function inside the object');
    }
}

product.test_fun();

//// Freeze an object - no more changes would be reflected
Object.freeze(product);
product['inStock'] = true;
console.log(product);


//// JSON Data
[{
    "name": "John",
    "age": 24
}]

// Converting a JS object into JSON string
console.log(JSON.stringify(person));
console.log(typeof JSON. stringify(person));

person2 = JSON.stringify(person);

// Convert JSOn to a JS object
person2_obj = JSON.parse(person2);
console.log(typeof person2_obj); 
*/

//// Objects are references 
// Stack -- stores primitives; creates a copy 
// Heap -- stores non primitives; creates references


/*
let user1 = 'Joe';
let user2 = user1;

console.log(user1);
console.log(user2);

user2 = 'Amy';
console.log(user1);
console.log(user2);

let user_obj1 = {
    email: 'joe@gmail.com',
    age: 23
}

let user_obj2 = user_obj1;
console.log(user_obj1);
console.log(user_obj2);

user_obj2['age'] = 70;
console.log(user_obj1);
console.log(user_obj2);
*/

//// Destructuring
const country_obj = {
    population: '300M',
    country: 'USA'
}

//const country = country_obj['country'];
//console.log(country);

const {country: cntry} = country_obj;
console.log(cntry);

const {country, population} = country_obj;
console.log(country);
console.log(population);
