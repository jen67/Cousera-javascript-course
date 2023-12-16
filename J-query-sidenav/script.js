const subMenus = document.querySelectorAll("ul li ul");

hideSubmenus(); 

function hideSubmenus() {
    for (var i = 0; i < subMenus.length; i++) {
      subMenus[i].className = "hide-menu";
    }
}

const menuLinks = document.querySelectorAll(".menulink");

for (var i = 0; i < menuLinks.length; i++) { 
    menuLinks[i].addEventListener("click", function (e) { 
        e.preventDefault();
        thisMenu = this.parentNode.querySelector("ul");
        if (thisMenu.classList.contains("hide-menu")) {
            hideSubmenus();
            thisMenu.className = "show-menu";
        }

        else {
            thisMenu.className = "hide-menu";
        }
    });
    }
