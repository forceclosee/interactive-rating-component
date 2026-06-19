const ratingPage = document.querySelector("#rating-page");
const ratingForm = document.querySelector("#rating-form");
const errorElement = document.querySelector("#alert-message");
const thankYouMessage = document.querySelector("#thank-you-message");
const ratingSelected = document.querySelector(".rating-selected");

function validateRating(inputElement) {
  if (!inputElement.validity.valid) {
    if (inputElement.validity.valueMissing) return false;
  } else {
    return true;
  }
}

function showSellectedRating() {
  let ratingValue = "";

  console.log(ratingValue);

  const ratingElement = ratingForm.querySelector(
    'input[name="rating-selection"]:checked',
  );
  if (ratingElement) {
    ratingValue = ratingElement.value;
    ratingSelected.textContent = ratingValue;
  }
}

ratingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!ratingForm.checkValidity()) {
    const ratingInput = ratingForm.querySelector(
      '.input[name="rating-selection"]',
    );

    validateRating(ratingInput);
  } else {
    errorElement.classList.remove("visible");
    ratingPage.setAttribute("inert", "");
    thankYouMessage.setAttribute("aria-hidden", "false");
    showSellectedRating();
    thankYouMessage.focus();
  }
});
