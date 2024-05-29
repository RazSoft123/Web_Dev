// Creating a floating login button. 
const loginButton = document.getElementById('loginbtn');
const mainpopup = document.getElementById('mainpopup');

console.log('Javascript file started loading...');

function show_loginform() {
    mainpopup.style.display = 'flex';
}

function hide_login_form() {
    mainpopup.style.display = 'none';
}

console.log('Javascript file fully loaded');