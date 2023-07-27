let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl = countStr.textContent
    countEl.textContent = 0
    count = 0
}
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr; // Append the countStr to the existing content of saveEl
    countEl.textContent = 0;
    count = 0;
}
console.log("Let's count people on the subway!")
