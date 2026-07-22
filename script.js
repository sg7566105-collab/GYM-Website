const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const fform = document.querySelector(".bmi-form");
const result = document.getElementById("result");

fform.addEventListener("submit", function(e) {

    e.preventDefault();

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (height === "" || weight === "" || height <= 0 || weight <= 0) {
        result.innerHTML = "Please enter valid values!";
        result.style.color = "red";
        return;
    }

    const bmi = weight / ((height / 100) ** 2);

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    }
    else if (bmi < 25) {
        status = "Normal Weight";
    }
    else if (bmi < 30) {
        status = "Overweight";
    }
    else {
        status = "Obese";
    }

    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> (${status})`;
    result.style.color = "white";

});