document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    
    form.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        
        let valid = true;
        let messages = [];

        // Validate email format
        if (!validateEmail(email)) {
            messages.push("Please enter a valid email address.");
            valid = false;
        }

        // Validate password length
        if (password.length < 6) {
            messages.push("Password must be at least 6 characters long.");
            valid = false;
        }

        // Validate passwords match
        if (password !== confirmPassword) {
            messages.push("Passwords do not match.");
            valid = false;
        }

        // Further validations can be added here

        // Show error messages if validation fails
        if (!valid) {
            alert(messages.join("\n"));
            event.preventDefault(); // Prevent form submission
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

