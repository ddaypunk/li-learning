 var extLinks = document.querySelectorAll('a[href^="http"]');

 console.log(extLinks);

 for (const link of extLinks) {
     if (!link.hasAttribute("target")) {
         link.setAttribute("target", "_blank");
     }
 }

// for(i = 0; i < extLinks.length; i++){
//      if (extLinks[i].hasAttribute("target")) {
//          extLinks[i].setAttribute("target", "_blank");
//      }
// }
