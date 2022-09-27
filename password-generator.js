const inputTab = document.getElementById('inputBox');
const generatedPassword = document.querySelector('.generate-password');


generatedPassword.addEventListener('click', function() {
    
    const allCharacters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 8;
    let password = "";
    
    for (let i = 0; i < passwordLength; i++) {
//Generated a random character and incremented to the password variable declared above.
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    document.getElementById('inputBox').value = password
 })

//Code to copy the password below.
function copyT() {
    let copyText = document.getElementById('inputBox');
    copyText.select();
    document.execCommand('copy');
}

//Code to clear the password below.
function clearPassword() {
    password = "";
    let clearText = document.getElementById('inputBox').value = password;
    clearText.clear();
    document.execCommand('clear');
}