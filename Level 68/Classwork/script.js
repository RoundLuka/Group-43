// const btn = document.getElementById("btn");
// const p = document.getElementById("countP")

// let count = 0;
// function counter() {
//     count++;
//     p.textContent = "Count: " + String(count)
// }

// btn.onclick = counter

// let account = {
//     email: "luka@gmail.com",
//     password: "luka1234",
//     verifed: true,
//     balance: 6000,
//     seeBalance: function() {
//         console.log(this.balance)
//     }
// }



// dot notation - სინტაქსი რომლითაც მიწვდებით ობიექტის რაიმე კუთვნილებას

// ობიექტებს აქვთ 3 ტიპის თვისება

// console.log(account.balance)

// let myBtn = document.getElementById("btn")
// btn.style.backgroundColor = 'red';
// btn.style.alignContent = 'center';

// let name = document.getElementById("name")
// name.textContent = "adtygeryer"

const username = document.getElementById("username");
const sendBtn = document.getElementById("sendBtn");
const display = document.getElementById("display");

let registeredName = localStorage.getItem("username")
display.textContent = "Hello " + registeredName


sendBtn.onclick = function() {
    localStorage.setItem("username", username.value)
    display.textContent = "Hello " + username.value
}

// localStoarge
