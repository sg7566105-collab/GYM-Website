const menu = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const fform = document.querySelector(".bmi-form");
const result = document.getElementById("result");

fform.addEventListener("submit", function (e) {

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

    result.innerHTML = `Your BMI is <strong>${bmi.toFixed(2)}</strong> (${status})`;
    result.style.color = "white";

});

// popup animation

// 1. सही कोट्स के साथ ऑब्जेक्ट को परिभाषित किया
const programs = { 
    strength: { 
        title: "💪 Strength Training", 
        description: "Build muscle, increase strength, and improve your overall fitness with personalized workout plans, expert coaching, and continuous progress tracking." 
    }, 
    fatloss: { 
        title: "Fat Loss", 
        description: "Burn calories with personalized workout and nutrition plans." 
    }, 
    cardio: { 
        title: "Cardio Fitness", 
        description: "Improve endurance and heart health with cardio sessions." 
    } 
}; 

let boxes = document.querySelectorAll('.box'); 
let popup = document.querySelector('.popup'); 
let overlay = document.querySelector('.overlay'); 

boxes.forEach(box => { 
    box.addEventListener('click', function (event) { 
        
        let key = box.getAttribute('data-program'); 
        
        console.log("Selected Key:", key); 

        if (!key || !programs[key]) {
            console.error("Program key not found or undefined for this box:", key);
            return;
        }
        
        popup.innerHTML = ''; 
        
        let close = document.createElement('span'); 
        close.classList.add('close'); 
        close.textContent = '×'; 
        
        let h2 = document.createElement('h2'); 
        let p = document.createElement('p'); 
        
        let startbutton = document.createElement('a'); 
        startbutton.classList.add('start-btn'); 
        startbutton.textContent = 'Start Program'; 
        startbutton.href="join-form.html";
        
        h2.textContent = programs[key].title; 
        p.textContent = programs[key].description; 
        
        popup.append(close, h2, p, startbutton); 
        overlay.style.display = 'flex'; 
        
        close.addEventListener('click', function (e) { 
            e.stopPropagation(); 
            overlay.style.display = 'none'; 
        });
    });
});


overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});
