const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e){
    //prevent clicked link from reloading page
    e.preventDefault();

    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// event handler
//CTA.onclick = reveal;

//vs event listener
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function() { console.log("The button was clicked!") }, false);
