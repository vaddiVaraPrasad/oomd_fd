document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    
    if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }
    
    if (!validatePassword(password)) {
      alert("Password must be at least 6 characters long");
      return;
    }
    
    if (!validateUsername(username)) {
      alert("Username must contain only letters and numbers");
      return;
    }
    
    // Proceed with login logic
    alert("Login successful");
  });
  
  function validateEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  function validateUsername(username) {
    // Alphanumeric username validation regex
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  }
  