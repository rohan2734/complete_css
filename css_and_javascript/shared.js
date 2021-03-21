var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
// backdrop.style.display = "block";
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

console.dir(backdrop); // console.dir(backdrop.style.backgroundImage) //console.dir(backdrop.style['background-image'])

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    //modal.className ='open'//his will actually overwrite the complete class
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

var modalNoButton = document.querySelector(".modal  button");
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}
toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
