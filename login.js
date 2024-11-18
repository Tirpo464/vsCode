// Select the form and message element
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Add event listener to the form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  
  // Get username and password values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Example validation (replace this with actual logic as needed)
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
