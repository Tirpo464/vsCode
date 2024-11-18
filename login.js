// Select the form and message element
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Add event listener to the form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get username and password values
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate inputs
  if (username === "" || password === "") {
    displayMessage("Please fill in all fields.", "red");
    return;
  }

  // Example login validation
  if (username === "user" && password === "pass123") {
    localStorage.setItem("username", username); // Store username in localStorage
    window.location.href = "welcoming_page.html"; // Redirect to the welcoming page
  } else {
    displayMessage("Invalid username or password.", "red");
  }
});

// Function to display a message
function displayMessage(text, color) {
  message.textContent = text;
  message.style.color = color;

  // Clear message after 3 seconds
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}
