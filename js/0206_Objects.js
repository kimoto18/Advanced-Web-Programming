// Primitives - Integers, Characters, Floats, strings,
// Higher order dtypes - arrays, functions, objects

// Objects - help us to group multiple values together
// Used to represent real-world entities. Ex: Person, product, bank account etc...
// Key-value pairs

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
