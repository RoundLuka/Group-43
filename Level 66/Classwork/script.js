// function greet() {
//     alert('Hello')
// }

// greet()

let registrationForm = document.getElementById("registrationForm");
let sendBtn = document.getElementById("sendBtn");

function getData() {
    let username = registrationForm.elements.username;
    let email = registrationForm.elements.email.value;
    let password = registrationForm.elements.password.value;
    let terms = registrationForm.elements.terms.value;

    console.log(username)

    // console.log("Username: " + username);
    // console.log("Email: " + email);
    // console.log("Password: " + password);
    // console.log("Agreed to Conditions: " + terms);
}

sendBtn.onclick = getData
