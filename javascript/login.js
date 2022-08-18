// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;


    if (email === 'sontan@bap.com' && password === 'secrete') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui to sontan namer kolombo, bap er bank er password vule jas');
    }
})