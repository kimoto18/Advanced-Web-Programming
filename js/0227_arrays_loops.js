// [10, 20, 30] --> collection of values
// [10, true, 'hi', [2, 3], {name: "Joe", age: 29}]
// Can store values of different types in a js array

/*
// Access the values of an array
array1 = [10, true, 'hi', [2, 3], {name: "Joe", age:29}]
console.log(array[2])
console.log(array1[3][1])

// Update an array value
array[1] = false
console.log(array1)

// Add an element to the array
array1.push(99)
console.log(array1)

// Remove an item from the array
array1.splice(1, 1)
console.log(array1)
*/


/*
/// LOOPS
// while loop

let i =0;
while(i <= 5) {
    console.log(i);
    i = i + 1
}

// for loop
for (let i =0; i <= 5;  i++) {
    console.log(i);
}

todo_list = [
    'make dinner',
    'do the dishes',
    'shop'
]

todo_list = [1, 2 ,3]

for (let i = 0; i < todo_list.length; i++){
    console.log(i + 5);
}

//Problem 1: Sum of all the elements of a given array
// Sample array: [22, 97, 112]

let sum = 0;
given_array = [22, 97, 112];

for (let i = 0; i < given_array.length; i++) {
    sum = sum + given_array[i];
}

console.log(sum);

//Problem 2: Consider a sample array [2, 3, 5]
// Create a new array with elements where each element is 3 times the element in the given array
// Expected array output: [6, 9, 15]

const ini_array = [2, 3, 5]
let nums_tripled = []
for (let i = 0; i < ini_array.length; i++) {
    nums_tripled.push(ini_array[i] * 3);
}

console.log(nums_tripled);
*/

// Break & Continue
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue; //skip the current iteration
    }
    if (i === 8){
        break; //break out of the loop
    }
    console.log(i);
}

