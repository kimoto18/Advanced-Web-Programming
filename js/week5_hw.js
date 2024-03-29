// Create houseForSale object
let houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: { name: "Blake", age: 29 },
    offers: [290000, 295000, 315000, 312000]
};

// a. Print out "houseForSale" to the terminal
console.log("a. House for sale:");
console.log(houseForSale);

// b. Delete the property with the key "built"
delete houseForSale.built;

// Change the age of the owner to be 30 inside "houseForSale"
houseForSale.owner.age = 30;

// Add a new property: "sale price" -> 312000
houseForSale["sale price"] = 312000;

// Print out "houseForSale" to the terminal
console.log("\ne. houseForSale:");
console.log(houseForSale);