const form = document.getElementById("registrationForm");
const nameInput= document.getElementById("name");
const emailInput= document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput= document.getElementById("password");

const strength = document.getElementById("strength");

function togglePassword(){
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }    
}

passwordInput.addEventListener("input", function(){
    let pass = passwordInput.value;
    if ( pass.length < 6){
        strength.innerText = "Weak";
        strength.style.color = "red";
    } else if ( pass.match (/[A-Z]/) && pass.match(/[0-9]/) ){
        strength.innerText = "Strong";
        strength.style.color = "green";
    } else {
        strength.innerText = "Medium";
        strength.style.color = "orange";
    }       
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = nameInput.value.trim();      
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let password = passwordInput.value.trim();
    if (name === "" || email === "" || phone === "" || password === ""){
        alert("Please fill in all fields.");
        return;
    }         
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        alert("Please enter a valid email address.");
        return;
    }
    if (!phone.match(/^\d{10}$/)){
        alert("Please enter a valid 10-digit phone number.");
        return;

    }
    alert("Registration successful!");
    form.reset();
    strength.innerText = "";
}
);
