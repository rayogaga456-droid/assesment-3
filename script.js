document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Input values
  let name = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let age = Number(document.getElementById("age").value);

  // Error display fields
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmError = document.getElementById("confirmError");
  let ageError = document.getElementById("ageError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  ageError.textContent = "";

  let valid = true;

  // Full Name Validation (must contain at least 2 words)
  if (name.split(" ").length < 2) {
    nameError.textContent = "Full Name must contain at least 2 words.";
    alert("Invalid Full Name");
    valid = false;
  }

  // Email format validation
  let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    alert("Invalid Email");
    valid = false;
  }

  // Password strength validation
  let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordPattern.test(password)) {
    passwordError.textContent = 
      "Password must be 8+ characters, include an uppercase letter, a number, and a special character.";
    alert("Weak Password");
    valid = false;
  }

  // Confirm Password match
  if (confirmPassword !== password) {
    confirmError.textContent = "Passwords do not match.";
    alert("Passwords do not match");
    valid = false;
  }

  // Age check
  if (age < 18) {
    ageError.textContent = "You must be at least 18.";
    alert("You must be 18 or older.");
    valid = false;
  }

  // Final success message
  if (valid) {
    alert("Registration successful!");
  }
});
