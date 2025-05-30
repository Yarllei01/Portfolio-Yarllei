const lamp = document.getElementById("lamp");
const body = document.body;

lamp.addEventListener("click" , function(){
    if(lamp.src.includes("lamp_off.png")){
        lamp.src = "assets/lamp_on.png";
        body.style.background = "radial-gradient(circle, white 8%, yellow 100%)";
    }
    else {
        lamp.src = "assets/lamp_off.png";
        body.style.background = "radial-gradient(circle, white 8%, black 100%)";

    }
 }
 );
