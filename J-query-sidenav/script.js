(function () {

    "use strict";

    
    // Hide all submenus
  function hideSubmenus() {
    const subMenus = document.querySelectorAll("ul li ul");
    for (let i = 0; i < subMenus.length; i++) {
      subMenus[i].className = "hide-menu";
    }
  }
hideSubmenus();
  

  const menuLinks = document.querySelectorAll(".menulink");

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
     let thisMenu = this.parentNode.querySelector("ul");
      if (thisMenu.classList.contains("hide-menu")) {
        hideSubmenus();
        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    });
  }
})();
