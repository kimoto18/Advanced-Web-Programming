// Function for triangle
function is_triangle(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("No"); // If the sticks do not add up
    } else {
        console.log("Yes"); //If the sticks add up
    }
}

function promptUserForInput() {
    let stick1 = parseInt(prompt("Enter the length of the first stick:"));
    let stick2 = parseInt(prompt("Enter the length of the second stick:"));
    let stick3 = parseInt(prompt("Enter the length of the third stick:"));

    is_triangle(stick1, stick2, stick3); // To check if each stick will allow a triangle
}

promptUserForInput();


