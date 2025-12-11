
// document dot notation
// document. 


let ageInput = document.getElementById("ageInput");
let ageBtn = document.getElementById("ageBtn");
let ageOutP = document.getElementById("ageOut");

function showAge() {
    ageOutP.textContent = "Age: " + ageInput.value;
}

ageBtn.onclick = showAge