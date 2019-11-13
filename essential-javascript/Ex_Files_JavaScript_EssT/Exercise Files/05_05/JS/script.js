const CTAELEMENT = document.querySelector(".cta a");

if(CTAELEMENT.hasAttribute("target")){
    console.log(CTAELEMENT.hasAttribute("target"));
} else {
    CTAELEMENT.setAttribute("target", "_blank");
}

console.log(CTAELEMENT.attributes);
