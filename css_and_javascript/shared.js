var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
// backdrop.style.display = "block";

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

var noButton = document.querySelector(".modal  button");

console.log(noButton);
noButton.addEventListener("click", function () {
  modal.style.display = "none";
  backdrop.style.display = "none";
});
backdrop.addEventListener("click", function () {});
