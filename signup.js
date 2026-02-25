document.addEventListener('DOMContentLoaded', () => {
            const signupForm = document.getElementById('signup_form');

            if (!signupForm) {
                console.error("Error: Element with ID 'signup_form' not found.");
                return; 
            }

            signupForm.onsubmit = function (e) {
                e.preventDefault();
                const signupEmail = document.getElementById('signup_email');
                const signupPass = document.getElementById('signup_pass');
                const signupEmailErr = document.getElementById('signup_email_err');
                const signupPassErr = document.getElementById('signup_pass_err');

                if (!signupEmail || !signupPass || !signupEmailErr || !signupPassErr) {
                    console.error("Error: One or more required form elements not found.");
                    return;
                }

                // Get the trimmed values from the input fields
                const emailValue = signupEmail.value.trim();
                const passValue = signupPass.value.trim();

                
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

                let isValid = true; 

                function saveSignupDetails(email, password) {
                   
                    let emails = JSON.parse(localStorage.getItem('signup_emails')) || [];
                    let passwords = JSON.parse(localStorage.getItem('signup_passwords')) || [];

                    // Add the new details
                    emails.push(email);
                    passwords.push(password);

                    // Save the updated arrays back
                    localStorage.setItem('signup_emails', JSON.stringify(emails));
                    localStorage.setItem('signup_passwords', JSON.stringify(passwords));
                }
                console.log(emailValue ) 
                console.log(passValue)
                // Email Validation
                signupEmailErr.textContent = ""; 
                if (emailValue === "") {
                    signupEmailErr.textContent = "Please fill the email section";
                    isValid = false;
                } else if (!emailRegex.test(emailValue)) {
                    signupEmailErr.textContent = "Please provide a valid email";
                    isValid = false;
                }

                // Password Validation
                signupPassErr.textContent = ""; // Clear previous errors
                if (passValue === "") {
                    signupPassErr.textContent = "Please fill the password Section";
                    isValid = false;
                } else if (!passRegex.test(passValue)) {
                    signupPassErr.textContent = "Password must contain uppercase, lowercase, number, special character and be 8–16 characters long";
                    isValid = false;
                }


                if (isValid) {
                    // 1. Save the successfully validated details
                    saveSignupDetails(emailValue, passValue);

                    alert("Registration Completed successfully!");
                    window.location.href = "login.html"; 
                }
            };
        });
  




// second trial


// document.querySelector('#signup_form').onsubmit = function (e) {
//     e.preventDefault();

//     const signup_form = document.getElementById('signup_form');
//     const signup_email = document.getElementById('signup_email');
//     const signup_pass = document.getElementById('signup_pass');
//     const signup_email_err = document.getElementById('signup_email_err');
//     const signup_pass_err = document.getElementById('signup_pass_err');

//     let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let vas = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

//     let isValid = true;

//     let save_sigup_email = JSON.parse(localStorage.getItem('signup_email')) || []
//     let save_sigup_pass = JSON.parse(localStorage.getItem('signup_pass')) || []

//     function save_signup_details() {
//         localStorage.setItem('signup_email', JSON.stringify(signup_email));
//         localStorage.setItem('signup_pass', JSON.stringify(signup_pass));

//     }
//     console.log(save_sigup_email)
//     console.log(save_sigup_pass)




//     if (signup_email.value.trim() === "") {
//         signup_email_err.textContent = "Please fill the email section";
//         isValid = false;
//     } else if (!regex.test(signup_email.value.trim())) {
//         signup_email_err.textContent = "Please provide a valid email";
//         isValid = false;
//     } else {
//         signup_email_err.textContent = "";
//         save_signup_details()
//     }


//     if (signup_pass.value.trim() === "") {
//         signup_pass_err.textContent = "Please fill the password Section";
//         isValid = false;
//     } else if (!vas.test(signup_pass.value.trim())) {
//         signup_pass_err.textContent = "Password must contain uppercase, lowercase, number, special character and be 8–16 characters long";
//         isValid = false;
//     } else {
//         signup_pass_err.textContent = "";
//         save_signup_details()
//     }


//     if (isValid) {
//         alert("Registration Completed successfully!");
//         save_signup_details()
//         Navigate("/login.html")
//         signup_form.submit();
//     }
// };

// First Trial
// document.querySelector('#signup_form').onsubmit = function (e){
//     e.preventDefault()

// const signup_form = document.getElementById('signup_form');
// const signup_email = document.getElementById('signup_email');
// const signup_pass = document.getElementById('signup_pass');
// const signup_email_err = document.getElementById('signup_email_err');
// const signup_pass_err = document.getElementById('signup_pass_err');

// let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// let vas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;
// let isValid = true;

// if (signup_email ===""){
//     signup_email_err.textContent = "Please fill the email section"
//     isValid
// }else if(!regex.test(signup_email)){
//      signup_email_err.textContent = "Please provide a valid email"
// }else{signup_email_err.textContent = ""}

// if (signup_pass ===""){
//     signup_pass_err.textContent = "Please fill the password Section"
// }else if (!vas.test(signup_pass)){
//     signup_pass_err.textContent = "Please input a valid password"
// }else(signup_pass.length < 8 ){
//     signup_pass_err.textContent = "Password should be greater than 8"
// }


// }