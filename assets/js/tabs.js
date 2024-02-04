const navigation = document.querySelectorAll(".tabs_nav button");
const content_panels = document.querySelectorAll(".tabs-content_panel");

navigation.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    navigation.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
    content_panels.forEach((el) => el.classList.remove("active-tab"));
    content_panels[idx].classList.add("active-tab");
  });
});
