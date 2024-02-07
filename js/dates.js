let date_var = new Date();
console.log(date_var);

/*
console.log(date_var.toDateString());
console.log(date_var.toISOString());
console.log(date_var.toJSON());
console.log(date_var.toLocaleDateString());
console.log(date_var.toLocaleTimeString());
*/

//Create custom dates
let date_var1 = new Date("2024-2-06");
console.log(date_var1.toLocaleDateString());

//// Time Stamp
console.log(Date.now());

console.log(date_var1.getTime());

console.log(date_var1.getFullYear());