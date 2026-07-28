console.log("JS Loaded");
const params = new URLSearchParams(window.location.search);

const planSelect = document.getElementById("plan");
const selectedPlan = params.get("plan");

if (selectedPlan) {
    planSelect.value = selectedPlan;
}

document.getElementById("join-form").addEventListener("submit", async function (e) {
    console.log("Submit Clicked");
    e.preventDefault()

    const memberData = {
        name: document.getElementById("name").value,
        age: Number(document.getElementById("age").value), 
        gender: document.getElementById("gender").value,
        height: Number(document.getElementById("height").value),
        weight: Number(document.getElementById("weight").value),
        waist: Number(document.getElementById("waist").value),
        neck: Number(document.getElementById("neck").value),
        occupation: document.getElementById("Occupation").value,
        fitnessGoal: document.getElementById("fitness-goal").value,
        plan: document.getElementById("plan").value,
        phone: document.getElementById("phone").value
    };

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

    try {
       
        const response = await fetch("http://localhost:5500/api/join", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(memberData)
        });

        console.log("Status:", response.status);
        const result = await response.json(); 
        console.log("Response:", result);

        if (response.ok && result.success) {
           
            Swal.fire({
                title: 'Success!',
                text: 'Registration Successful!',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: 'grey' 
            });


           
            window.open(
                `https://wa.me/919670083550?text=${encodeURIComponent(message)}`,
                "_blank"
            );

           
            document.getElementById("join-form").reset();
        } else {
            alert("Server Error: " + (result.message || "Something went wrong"));
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        alert("Failed to connect to server. Make sure backend is running!");
    }
});
