document.addEventListener('DOMContentLoaded', () => {
    // 1. Change form ID to reflect Login purpose (Assuming your HTML is updated)
    const loginForm = document.getElementById('login_form'); 

    // Check for the correct form element
    if (!loginForm) {
        console.error("Error: Element with ID 'login_form' not found.");
        return; 
    }

    loginForm.onsubmit = function (e) {
        e.preventDefault();

        // 2. Change IDs to reflect Login purpose
        const loginEmailInput = document.getElementById('login_email'); 
        const loginPassInput = document.getElementById('login_pass'); 
        const loginEmailErr = document.getElementById('login_email_err');
        const loginPassErr = document.getElementById('login_pass_err');

        if (!loginEmailInput || !loginPassInput || !loginEmailErr || !loginPassErr) {
            console.error("Error: One or more required login elements not found.");
            return;
        }

        const emailValue = loginEmailInput.value.trim();
        const passValue = loginPassInput.value.trim();

        // Clear previous errors
        loginEmailErr.textContent = ""; 
        loginPassErr.textContent = "";

        // Basic check for empty fields before checking credentials
        if (emailValue === "") {
            loginEmailErr.textContent = "Please enter your email.";
            return;
        }
        if (passValue === "") {
            loginPassErr.textContent = "Please enter your password.";
            return;
        }
        
        // --- 3. CORE LOGIN LOGIC: Check Local Storage ---
        
        // Retrieve stored data (if it exists)
        const storedEmails = JSON.parse(localStorage.getItem('signup_emails')) || [];
        const storedPasswords = JSON.parse(localStorage.getItem('signup_passwords')) || [];
        
        // Find the index of the entered email
        const userIndex = storedEmails.indexOf(emailValue);

        // Check if the email was found AND the password at that index matches
        if (userIndex !== -1 && storedPasswords[userIndex] === passValue) {
            
            // Login Successful
            alert("Login Successful! Welcome.");
            // You can optionally save a flag for logged-in status here
            localStorage.setItem('isLoggedIn', 'true'); 
            
            // Redirect to the dashboard/todo page
            window.location.href = "todo.html"; 

        } else {
            // Login Failed
            alert("Incorrect email or Password");
            // Optionally, display the error in the form's error fields
            loginEmailErr.textContent = "Incorrect email or password.";
            loginPassErr.textContent = "Incorrect email or password.";
        }
    };
});


