const ratingPage = document.querySelector(".rating-page");
const ratingWrapper = document.querySelector(".rating-wrapper");
const ratingSelected = document.querySelector(".rating-selected");
const submitButton = document.querySelector(".submit-button");
const thankYouMessage = document.querySelector(".thank-you-message");
const alertMessage = document.querySelector(".alert-message");

// Variable to store the selected rating value, initialized as an empty string
let ratingValue = "";

ratingWrapper.addEventListener("click", function (e) {
  // look for the closest ancestor element with the class "rating" starting from the clicked target
  const ratingElement = e.target.closest(".rating");

  // conditional to check if a rating element was found
  if (ratingElement) {
    // get the value of the "data-value" attribute from the clicked rating element and store it in the ratingValue variable
    ratingValue = ratingElement.getAttribute("data-value");

    // check if there is an active rating (an element with the class "white-bg")
    const activeRating = document.querySelector(".white-bg");

    // if there is an active rating, remove the "white-bg" class from it to reset the previous selection
    if (activeRating) {
      activeRating.classList.remove("white-bg");
    }

    // add the "white-bg" class to the clicked rating element to visually indicate that it is selected
    ratingElement.classList.add("white-bg");
    // add rating value to the ratingSelected element to display the selected rating to the user
    ratingSelected.textContent = `${ratingValue}`;
  }
});

submitButton.addEventListener("click", function () {
  // if user has selected a rating (ratingValue is not an empty string), hide the rating page and show the thank you message
  if (ratingValue !== "") {
    ratingPage.classList.remove("visible");
    ratingPage.setAttribute("aria-hidden", "true");
    thankYouMessage.classList.add("visible");
    thankYouMessage.setAttribute("aria-hidden", "false");

    // if user has not selected a rating (ratingValue is still an empty string), show an alert message and add an animation to the rating page to draw attention to the alert
  } else {
    alertMessage.classList.add("visible");
    alertMessage.setAttribute("aria-hidden", "false");
    ratingPage.classList.add("alert-animation");

    // set a timeout to remove the "alert-animation" class from the rating page after 400 milliseconds, allowing the animation to retrigger
    setTimeout(() => {
      ratingPage.classList.remove("alert-animation");
    }, 400);
  }
});
