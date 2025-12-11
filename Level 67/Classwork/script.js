// let product = {
//     productName: "Apple",
//     price: 5,
//     category: "Fruiit"
// }

// product.price = 15
// product["Expiration Date"] = "26-1223-14"

// console.log(product)


// const fighter = {
//     class: "Archer",
//     ranged: true,
//     health: 100,
//     damage: 20,

//     heal: function() {
//         fighter.health += 20
//     }
// }

// fighter.heal()
// console.log(fighter.health)

// const account = {
//     username: "Luka",
//     email: "luka@mail.com",
//     password: "luka1234"
// }

// ობიექტის სახელი, შემდეგ წერტილი და ობიექტის თვისება - Dot notation

// JS-ში სულ ვმუშაობთ ობიექტებთან, რომლებიც შედგებიან სხვადსხვა ტიპის თვისებისგან:
// 1. კუთვნილება - ინფორმაცია ობიექტის/ელემენტის შესახებ, მაგალითად: HTML ატრიბუტი, CSS სტილი, ინფორმაცია
// 2. მეთოდი - ფუნქციონალი კოდში რომელიც დეველოპერს უმარტივებს მუშაობას
// 3. მოვლენა - ცვლილება რომელშიც ეს ობიექტი მონაწილეობს 

// ჩვენ ყველა ამ თვისებას მივწვდებით dot notation სინტაქსით

// let button = document.querySelector("button")
// console.log(button.textContent)

// button.onclick = function() {
//     alert("You clicked on a button")
// }



// and - &&
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// or - ||
// console.log(true || true) // true
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// not - !
// console.log(!true)
// console.log(!false)


// let andBtn = document.getElementById("andBtn");
// let orBtn = document.getElementById("orBtn");
// let notBtn = document.getElementById("notBtn");

// andBtn.onclick = function() {
//     let value1 = document.getElementById("andval1").checked;
//     let value2 = document.getElementById("andval2").checked;

//     let result = value1 && value2;
//     let resP = document.getElementById("andP");
//     resP.textContent = "Result: " + result
// }

// orBtn.onclick = function() {
//     let value1 = document.getElementById("orval1").checked;
//     let value2 = document.getElementById("orval2").checked;

//     let result = value1 || value2;
//     let resP = document.getElementById("orP");
//     resP.textContent = "Result: " + result
// }

// notBtn.onclick = function() {
//     let value = document.getElementById("not").checked;
//     let notP = document.getElementById("notP");

//     let result = !value;

//     notP.textContent = "Result: " + result;
// }

// let activityScore = Number(prompt("Enter your activity score:"))
// let examScore = Number(prompt("Enter exam score: "))

// let score = activityScore + examScore;

// if(score > 90) {
//     alert("Grade: A")
// } else if(score > 80) {
//     alert("Grade: B")
// } else if(score > 70) {
//     alert("Grade C")
// } else if(score > 60) {
//     alert("Grade D")
// } else if(score > 50) {
//     alert("Grade: E")
// } else {
//     alert("Grade: F")
// }

// let counter = 15;
// while (counter > 0) {
//     console.log(counter)
//     counter--;
// }

// for(let i = 40; i > 20; i--) {
//     console.log(i)
// }

// let age = 18
// if (age > 18) {
//   alert("Regular price");
// } else if(age) {
//   alert("Discount");
// }

// while (3 > 2) {

// }

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }