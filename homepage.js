let enteredPassword='';
const correctPassword='031224';
const passwordDisplay=document.getElementById('passwordDisplay');
const keys=document.querySelectorAll('.key');
const clearButton=document.getElementById('clear');
const submitButton=document.getElementById('submitButton');
const errorMessage=document.getElementById('error-message');
keys.forEach(key=> {
    key.addEventListener('click', function() {
        const keyValue=this.getAttribute('data-key');
        enteredPassword+=keyValue;
        passwordDisplay.value=enteredPassword;
        if (enteredPassword.length>6) {
            enteredPassword=enteredPassword.slice(0, 6);
            passwordDisplay=enteredPassword;
        }
    });
});
clearButton.addEventListener('click', function() {
    enteredPassword='';
    passwordDisplay.value='';
    errorMessage.style.display='none';
});
submitButton.addEventListener('click', function() {
    if (enteredPassword===correctPassword) {
        alert("Login successful. Very good, baby!");
        window.location.href="main.html";
    } else {
        errorMessage.style.display='block';
    }
});