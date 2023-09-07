
window.onload = flipManager;

let currentFaceToggle = true; // meaning front; false= meaning back;

function flipManager() {

    console.log("Flip Manager is invoked...");


    // get the inner-card and set its rotate property
    const inner_card = document.getElementById("rotating");

    setInterval(() => {
        console.log("Flipping..");
        if(currentFaceToggle) {
            inner_card.style.transform = "rotateX(180deg)";
        }else {
            inner_card.style.transform = "rotateX(0deg)";
        }
        
        currentFaceToggle = !currentFaceToggle;

    }, 3000);
    
}