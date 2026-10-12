// Event Handling addEventListener and Common Event Types
const alertBtn = document.getElementById("alert-btn");
img.setAttribute("src", "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww")

img.style.height = "400px";
img.style.width = "400px";




alertBtn.addEventListener("click", () => {
    console.log("btn click")
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxG4UWPFBuGmrVQ_j_4ItCFBMONB-eDxDbe6BsD-I1ag&s=10"
})



// Select the button and the message paragraph
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add an event listener (the handler)
button.addEventListener('click', function (event) {
    // This code runs when the button is clicked
    message.textContent = "Button was clicked successfully!";

});