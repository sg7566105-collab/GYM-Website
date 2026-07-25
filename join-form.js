const params=new URLSearchParams(window.location.search);
console.log(window.location.href);
console.log(params.get("plan"));
const selectedPath=params.get("plan");
console.log(plan.value);
plan.value=selectedPath;

document.getElementById("join-form").addEventListener("submit",function(e){
    e.preventDefault();
    console.log("Submit event");
    const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const gender=document.getElementById("gender").value;
    const height=document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    const occupation=document.getElementById("Occupation").value;
    const fitness=document.getElementById("fitness-goal").value;
    const plan=document.getElementById("plan").value;
    const phone=document.getElementById("phone").value;

    const message=`💪 NEW FITSUTRA REGISTRATION
    Name:${name}
    Age:${age}
    Gender:${gender}
    Height:${height}
    Weight:${weight}
    Occupation:${occupation}
    Fitness:${fitness}
    plan:${plan}
    Phone-no:${phone}`;
    console.log('https://wa.me/919670083550?text=${encodeURIComponent(message)}');
    window.open('https://wa.me/919670083550?text=${encodeURIComponent(message)}',"_blank");


    

});
