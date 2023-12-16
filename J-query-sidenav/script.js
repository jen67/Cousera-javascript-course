(function () {
  function hideSubmenus() {
    const subMenus = document.querySelectorAll("ul li ul");
    for (var i = 0; i < subMenus.length; i++) {
      subMenus[i].className = "hide-menu";
    }
  }

  hideSubmenus();

  const menuLinks = document.querySelectorAll(".menulink");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      thisMenu = this.parentNode.querySelector("ul");
      if (thisMenu.classList.contains("hide-menu")) {
        hideSubmenus();
        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    });
  }
})();
