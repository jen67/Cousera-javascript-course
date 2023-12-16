const subMenus = document.querySelectorAll("ul li ul");
const menuItems = document.querySelectorAll("ul li ul li ");

for (var i = 0; i < subMenus.length; i++) {
    subMenus[i].className = "hide-menu";
}

const menuLinks = document.querySelectorAll(".menulink");

for (var i = 0; i < menuLinks.length; i++) { 
    menuLinks[i].addEventListener("click", function (e) { 
        e.preventDefault();
        subMenus.forEach((subMenu) => {
            subMenu.classList.toggle("show-menu"); 
        });
    });
}