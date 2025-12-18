// 5) შექმენით car ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: brand, model, year, mileage, drive (მეთოდი), drive მეთოდმა უნდა გაზარდოს mileage 100-ით ყოველი გამოძახებისას, შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ drive მეთოდი ორჯერ, კომენტარით ახსენით რა არის ობიექტი და როგორ იქმნება ის კონსტრუქტორით


// let car = {
//     brand: "Hyundai",
//     model: "Jeep",
//     year: 2012,
//     mileage: 500.1,
//     safetyCheck: true,

//     drive: function() {
//         car.mileage += 100;
//     }

// }

// console.log(car.mileage)

// car.drive()
// car.drive()
// car.drive()

// console.log(car.mileage)

// console.log(document)


// document.createEleement
// parent.appendChild(child)


// let newButton = document.createElement("button")
// newButton.textContent = "New Button"

// document.body.appendChild(newButton)

// const taskField = document.getElementById('taskField');
// const sendBtn = document.getElementById("sendBtn");
// const tasksList = document.getElementById("tasks");

// sendBtn.onclick = function() {
//     const newTask = document.createElement("li")
//     newTask.textContent = taskField.value

//     taskField.value = ""

//     let removeButton = document.createElement("button");
//     removeButton.textContent = "Remove"

//     removeButton.onclick = function() {
//         tasksList.removeChild(newTask)
//     }

//     newTask.appendChild(document.createTextNode(""))
//     newTask.appendChild(removeButton)
    
//     tasksList.appendChild(newTask)
// } 

// const p = document.querySelector("p")

// p.onmouseover = function() {
//     console.log("Mouse entered")
// }

// p.onmouseout = function() {
//     console.log("Mouse out")
// }

// function handleClick(eventObject) {
//     console.log(eventObject)
// }

// let eventListening = p.addEventListener("click", handleClick)

// p.removeEventListener("click", handleClick)

// const form = document.querySelector("form");
// const p = document.querySelector("p")


// form.addEventListener("submit", function(e) {
//     e.preventDefault()
    
//     const user = form.elements.username.value

//     p.textContent = user
// })


// setTimeout - დააყენე დრო ამიწურა
// setInterval - დააყენე შუალედი

// 1s = 1000ms

// const p = document.querySelector("p")

// function changeColor() {
//     p.style.backgroundColor = "red"
// }

// let s = 5;

// function count() {
//     s -= 1
//     console.log(s)
// }

// setInterval(count, 1000)

setTimeout(changeColor, 5000)

