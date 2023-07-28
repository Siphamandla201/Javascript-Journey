// Declare an empty array to store leads
let myLeads = [];

// Get references to HTML elements
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

// Get stored leads from local storage and parse them
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// If there are leads in local storage, set myLeads to the stored leads and render them
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// Add a click event listener to the "tab-btn" element
tabBtn.addEventListener("click", function () {
    // Use Chrome API to get the currently active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Add the URL of the active tab to the myLeads array
        myLeads.push(tabs[0].url);
        // Save the updated myLeads array to local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        // Render the updated myLeads array
        render(myLeads);
    });
});

// Define the render function to display the leads in the list
function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

// Add a double-click event listener to the delete button
deleteBtn.addEventListener("dblclick", function () {
    // Clear local storage and reset the myLeads array
    localStorage.clear();
    myLeads = [];
    // Render the empty myLeads array
    render(myLeads);
});

// Add a click event listener to the input button
inputBtn.addEventListener("click", function () {
    // Add the value of the input element to the myLeads array
    myLeads.push(inputEl.value);
    // Clear the input element
    inputEl.value = "";
    // Save the updated myLeads array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // Render the updated myLeads array
    render(myLeads);
});
