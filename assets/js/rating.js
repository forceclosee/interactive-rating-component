const ratingPage = document.querySelector(".rating-page");
// element ul yang berisi list rating dengan class "rating-wrapper" dan atribut data-value untuk menyimpan nilai rating yang dipilih.
const ratingWrapper = document.querySelector(".rating-wrapper");
// element span untuk menampilkan nilai rating yang dipilih dengan class "rating-selected"
const ratingSelected = document.querySelector(".rating-selected");
const submitButton = document.querySelector(".submit-button");
// thank you message setelah klik submit
const thankYouMessage = document.querySelector(".thank-you-message");
// alert jika user belum memilih rating
const alertMessage = document.querySelector(".alert-message");
// Variabel untuk menyimpan nilai rating yang dipilih
let ratingValue = "";

ratingWrapper.addEventListener("click", function (e) {
  // Mencari element terdekat yang memiliki class "rating" dari elemen yang diklik
  const ratingElement = e.target.closest(".rating");

  // conditional untuk menjalankan function hanya jika target yang diklik adalah atau berada di dalam elemen "rating"
  if (ratingElement) {
    // Mengambil angka rating dari elemen ratingElement
    ratingValue = ratingElement.getAttribute("data-value");
    // cek apakah sudah ada rating yang dipilih, hapus jika ada
    const activeRating = document.querySelector(".white-bg");

    if (activeRating) {
      activeRating.classList.remove("white-bg");
    }
    // memberi background putih pada rating yang dipilih
    ratingElement.classList.add("white-bg");
    // menambahkan nilai rating ke dalam elemen ratingSelected
    ratingSelected.textContent = `${ratingValue}`;
  }
});

submitButton.addEventListener("click", function () {
  // jika ada nilainya tampilkan thankyou message
  if (ratingValue !== "") {
    ratingPage.classList.remove("visible");
    thankYouMessage.classList.add("visible");

    // jika tidak ada nilainya tampilkan alert message
  } else {
    alertMessage.classList.add("visible");
    ratingPage.classList.add("alert-animation");

    // Menghapus class animasi setelah durasi 400ms selesai agar bisa di-trigger kembali
    setTimeout(() => {
      ratingPage.classList.remove("alert-animation");
    }, 400);
  }
});
