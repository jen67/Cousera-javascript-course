// (function () {
//   "use strict";

//   const subMenus = document.querySelectorAll("ul li ul");
//   const menuLinks = document.querySelectorAll(".menulink");

//   // Hide all submenus
//   function hideSubmenus() {
//     for (let i = 0; i < subMenus.length; i++) {
//       subMenus[i].className = "hide-menu";
//     }
//   }
//   hideSubmenus();

//   for (let i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener("click", function (e) {
//       e.preventDefault();
//       let thisMenu = this.parentNode.querySelector("ul");
//       if (thisMenu.classList.contains("hide-menu")) {
//         hideSubmenus();
//         thisMenu.className = "show-menu";
//       } else {
//         thisMenu.className = "hide-menu";
//       }
//     });
//   }
// })();




// Jquery
$(function () {
  
  "use strict";

$('ul li ul').hide();

$('.menulink').click(function () {
  var thisMenu = $(this).next('ul');

  $('ul li ul').not(thisMenu).hide();

  thisMenu.toggle();
});

});