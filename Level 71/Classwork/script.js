
// let button = document.querySelector("button")
// let p = document.querySelector("p")

// button.parentElement.removeChild(button)

// button.addEventListener("click", changeColor);

// setInterval(changeColor, 2000)

// function changeColor(eventObject) {
//     console.log(eventObject.target)
// }

// button.addEventListener("click", changeColor)

// nodes
// element
// text
// attribute

// 3
let myNums = ["Luka", "Tornike", "Nikolozi"]
//           0  1  2  3

// .splice
// .slice


for(let i = 0; i < myNums.length; i++) {
    
    let product = document.createElement("p")
    product.textContent = myNums[i]
    document.body.appendChild(product)
}