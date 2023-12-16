const toggleNav = querySelectorAll("ul li");
const navlinks = querySelectorAll("ul li ul li");

toggleNav.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.target.classList.toggle("show");
  });
});