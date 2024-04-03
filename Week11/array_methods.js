/*
// For Each
[
    'make dinner',
    'wash dishes',
    'shop groceries'
].forEach((value, index) => {
    if (value == 'make dinner') {
        return;
    }
    console.log(index);
    console.log(value);
})

// map, filter and reduce --> return a new or modified array

// FILTER
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = numbers.filter(function(num) {
    return num % 2 === 0
});
console.log(evenNums);

// Short Form
const evenNums2 = numbers.filter(num => num % 2 === 0);
console.log(evenNums2);

// If we want to achieve the same results with For Each
const evenNums3 = [];
numbers.forEach(num => {
    if (num % 2 === 0) {
        evenNums3.push(num);
    }
});
console.log(evenNums3);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1982, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'FInance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1980, end: 1989},
]

// Get only retail companies
const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// Get companies that lasted for 10 years or more
const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
);
console.log(longCompanies);
*/

// Filter --> filters out the elements of an array based on some conitions
// MAP --> used to apply some operations on every element of the array and return the modified elements in a new array
/*
const numbers = [11, 22, 33, 44, 55]
// Double every number in that array
const doubleNumbers = numbers.map(
    // (number) => number * 2
    (number) => number + 1000
);
console.log(doubleNumbers);

// Same thing with For Each
const tripleNumbers = [];
numbers.forEach(
    (numbers) => {
        number = number * 3
        tripleNumbers.push(number);
    }
);
console.log(tripleNumbers);

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1982, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'FInance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1980, end: 1989},
]

// Create an array of company names
const companyNames = companies.map(
    (company) => company.name
);
console.log(companyNames);

const companyInfo = companies.map(
    (company) => {
        return {
            name: company.name,
            category: company.category
        }
    }
);
console.log(companyInfo);

// Create an arrat of objects w9th the name and length of each company in years
const companyYears = companies.map(
    (company) => {
        return {
            name: company.name,
            length: company.end - company.start + ' years'
        }
    }
);
console.log(companyYears);

// Chain map methods
// We will consider the numbers array. For each of those number i) sqrt of the number ii) double that sqrt
const square_and_double = numbers.map(
        (number) => Math.sqrt(number)
    ).map(
        (sqrt) => sqrt * 2
    );
console.log(square_and_double);

// Chain different methods
const evenDouble = numbers.filter(
        (number) => number % 2 === 0
    ).map(
        (number) => number * 2
    );
console.log(evenDouble);
*/
/*
// REDUCE
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers
        .reduce(function(accumulator, current_value) {
            return accumulator + current_value;
        }, 0)
console.log(sum);

// Shorter version using arrow function
const sum1 = numbers.
        reduce((acc, curr) => acc + curr, 0);
console.log(sum1);

const sum2 = numbers.
        reduce((acc, curr) => acc + curr, 10);
console.log(sum2);

const cart = [
    {id: 1, name: 'Product 1', price: 130}
    {id: 2, name: 'Product 2', price: 150}
    {id: 3, name: 'Product 3', price: 175}
]

const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log(total);
*/

// ARRAY EXERCISES
// Take a people array. Create a new array called young_people that stores objects with only name and email properties of all the people that are 25 and under
const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '111-111-1111',
        age: 30
    },
    {
        firstName: 'Jane',
        lastName: 'Roe',
        email: 'jane@gmail.com',
        phone: '222-222-2222',
        age: 25
    },
    {
        firstName: 'David',
        lastName: 'Smith',
        email: 'david@gmail.com',
        phone: '333-333-3333',
        age: 45
    },
    {
        firstName: 'Sara',
        lastName: 'Watson',
        email: 'sara@gmail.com',
        phone: '444-444-4444',
        age: 19
    },
    {
        firstName: 'Emma',
        lastName: 'Watson',
        email: 'emma@gmail.com',
        phone: '555-555-5555',
        age: 30
    },
]

const young_people = people.filter(
    (person) => person.age <= 25
).map(
    (person) => (
        {
            name: person.firstName + ' ' + person.lastName,
            email: person.email
        }
    )
);
console.log(young_people);

// EXERCISE 2: Add all the positive numbers in a given array
ini_numbers = [2, -30, 50, 20, -12, -9, 7]
const positive_sum = ini_numbers.filter(
        (number) => number > 0
    ).reduce(
        (acc, curr) => acc + curr, 0
    );
console.log(positive_sum);

// EXERCISE 3: Take an array of words and create a new array with the first letter of every word capitalized
const words = ['apple', 'orange', 'grapes'] //Apple, Orange

const cap_words = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
);
console.log(cap_words);