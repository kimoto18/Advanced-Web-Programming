    // Fucntion created for ticket price
function calculateTicketPrice() {
    // Prompt the user to enter gender and age
    let gender = prompt("Please enter your gender (Male/Female)").toLowerCase();
    let age = parseInt(prompt("Please enter your age"));

    let ticketPrice = 100; // Assuming the ticket price is $100 by default

    // Applying discounts based on age and gender
    if (age < 5) {
         ticketPrice = 0; // Kids under 5 years of age are free
    } else if (age <= 8) {
        ticketPrice /= 2; // Kids up to 8 years have half priced ticket
    } else if (age >= 65) {
        ticketPrice *= 0.3; // People over 65 only pay 30% of the ticket
    }

    if (gender === "female") {
        ticketPrice *= 0.5; // Females get 50% off
    }

    // Display the price
    alert("Your ticket price is: $" + ticketPrice.toFixed(2));
}

// Call the function to calculate and display the ticket price
calculateTicketPrice();
