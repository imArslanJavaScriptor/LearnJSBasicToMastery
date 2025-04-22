document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let userHeight = Number(document.getElementById("height").value);
    let userWeight = Number(document.getElementById("weight").value);
    let resultBox = document.getElementById("results")

    // console.log(userHeight);
    // console.log(userWeight);

    function calculateBMI(height, weight) {
        let heightInMeters = (height/100) ** 2
        let BMIFormula = weight / heightInMeters
        let textData = document.createElement("p")

        let resultText = "";

        if (BMIFormula <= 18.6) {
            resultText = `Your BMI is ${BMIFormula.toFixed(2)} = Under Weight`;
        } else if (BMIFormula > 18.6 && BMIFormula < 24.9) {
            resultText = `Your BMI is ${BMIFormula.toFixed(2)} = Normal Weight`;
        } else {
            resultText = `Your BMI is ${BMIFormula.toFixed(2)} = Over Weight`;
        }

        textData.innerHTML = resultText
        resultBox.innerHTML = ""
        resultBox.appendChild(textData)

        
    }
    calculateBMI(userHeight, userWeight)
    
});


// Dark Mode Toggle
const themeToggler = document.getElementById("theme-toggle");

let isDarkMode = false

themeToggler.addEventListener("click", function() {
    isDarkMode = !isDarkMode

    if (isDarkMode) {
        document.body.style.backgroundColor = "#121212";
        themeToggler.innerHTML = "💡";
        themeToggler.style.backgroundColor = "white";
        themeToggler.style.color = "black";
    } else {
        document.body.style.backgroundColor = "white";
        themeToggler.innerHTML = "☀️";
        themeToggler.style.backgroundColor = "black";
        themeToggler.style.color = "white";
    }
})