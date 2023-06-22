const signupButton = document.getElementById("signup-btn");

const signupHandler = async (event) => {
  event.preventDefault();
  const userName = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();
  console.log(userName, email, password);
  // Check if all fields are completed
  if (!userName || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }
  // Check if the email is valid
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred during signup.");
    return;
  }
};

const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  console.log(email, password);
  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

signupButton.addEventListener("click", signupHandler);
