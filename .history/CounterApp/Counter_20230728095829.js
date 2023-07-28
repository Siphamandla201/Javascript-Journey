// Initialize the count variable to 0
let count = 0;
let people = [];

// Get the element with ID "save-el" and store it in the saveEl variable
let saveEl = document.getElementById("save-el");

// Get the element with ID "count-el" and store it in the countEl variable
let countEl = document.getElementById("count-el");

let passengerBtn = document.getElementById("passenger-btn");


// Function to increment the count and update the countEl text content
function increment() {
    countEl.textContent = count += 1; // Increment the count by 1
}

// Function to increment the count and update the countEl text content
function decrement() {
    count -= 1; // Increment the count by 1
    countEl.textContent = count; // Update the text content of countEl to the new count value
}


// Function to save the current count and reset it to 0
function save() {
    let countStr = count; // Create a string containing the current count followed by a hyphen and space 
    
    people.push(countStr);
    
    totalPeople = 0;
    for(let i = 0; i < people.length; i++) {
        totalPeople += parseInt(people[i]);
    }
    
    // lastPerson = 


    saveEl.textContent = totalPeople ; // Append the countStr to the existing content of saveEl
    countEl.textContent = 0; // Reset the text content of countEl to 0
    count = 0; // Reset the count variable to 0

    console.log(`Total : ${people}`);
    console.log(`Total : ${totalPeople}`);
}


function SeePassengers() {
    let passengerList = document.getElementById("passengerList");

    passengerBtn
}


