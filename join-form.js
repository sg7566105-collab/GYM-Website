console.log("JS Loaded");
const params = new URLSearchParams(window.location.search);

const planSelect = document.getElementById("plan");
const selectedPlan = params.get("plan");

if (selectedPlan) {
    planSelect.value = selectedPlan;
}

document.getElementById("join-form").addEventListener("submit", function (e) {
    console.log("Submit Clicked");
    e.preventDefault(); // पेज को रीलोड होने से रोकता है

    // फ़ॉर्म से सारा डेटा इकट्ठा करें
    const memberData = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value, 
        gender: document.getElementById("gender").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
        waist: document.getElementById("waist").value,
        neck: document.getElementById("neck").value,
        occupation: document.getElementById("Occupation").value,
        fitnessGoal: document.getElementById("fitness-goal").value,
        plan: document.getElementById("plan").value,
        phone: document.getElementById("phone").value
    };

    // व्हाट्सएप के लिए मैसेज तैयार करें
    const message = `💪 NEW FITSUTRA REGISTRATION

Name: ${memberData.name}
Age: ${memberData.age}
Gender: ${memberData.gender}
Height: ${memberData.height}
Weight: ${memberData.weight}
Waist: ${memberData.waist}
Neck: ${memberData.neck}
Occupation: ${memberData.occupation}
Fitness Goal: ${memberData.fitnessGoal}
Plan: ${memberData.plan}
Phone: ${memberData.phone}`;

    // 🚀 सीधा व्हाट्सएप खोलने का कोड (बिना किसी पॉप-अप या एरर के)
    window.open(   `https://wa.me/919670083550?text=${encodeURIComponent(message)}`,"_blank");

    // फ़ॉर्म को खाली करें
    document.getElementById("join-form").reset();
});
