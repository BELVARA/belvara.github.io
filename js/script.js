$( function() {
    $( "#dialog" ).dialog();
} );

// pop up box
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popupContainer");
    var popupText = document.getElementById("popupText");
    var popupCount = 0;

    popupContainer.style.display = "flex";

    // Fungsi untuk menampilkan pop-up
    window.openPopup = function() {
        if (popupCount < 2) { // Jumlah pop-up yang diizinkan
            popupContainer.style.display = "flex";
            // Ganti konten pop-up sesuai kebutuhan
            if (popupCount === 0) {
                // popupText.textContent = "Konten pop-up pertama di sini.";
                popupText.textContent = "Konten pop-up kedua di sini.";
            } 
            popupCount++;
        } else {
            popupContainer.style.display = "none"; // Ganti dengan URL halaman berikutnya
            // alert("Anda sudah menampilkan pop-up sebanyak 2 kali.");
        }
    }
    // // Fungsi untuk menutup pop-up dan mengarahkan ke halaman berikutnya
    // window.closePopup = function() {
    //     popupContainer.style.display = "none"; // Ganti dengan URL halaman berikutnya
    // };
});