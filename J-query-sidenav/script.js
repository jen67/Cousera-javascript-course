const subMenus = document.querySelectorAll("ul li ul");

for (var i = 0; i < subMenus.length; i++) {
    subMenus[i].className = "hide-menu";

    subMenus[i].addEventListener("click", function (e) { 
        e.classList.toggle("show-menu");  
    });
}