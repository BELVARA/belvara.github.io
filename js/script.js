$( function() {
    $( "#dialog" ).dialog();
} );

// pop up box
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer = document.getElementById("popupContainer");
    var popupText = document.getElementById("popupText");
    // var popupimage = document.getElementById("popupimage");
    var popupCount = 0;

    popupContainer.style.display = "flex";

    // Fungsi untuk menampilkan pop-up
    window.openPopup = function() {
        if (popupCount < 1) { // Jumlah pop-up yang diizinkan
            popupContainer.style.display = "flex";
            // Ganti konten pop-up sesuai kebutuhan
            if (popupCount === 0) {
                // document.body.style.backgroundImage = "url('gif1.gif')";
                
       
    }
    // // Fungsi untuk menutup pop-up dan mengarahkan ke halaman berikutnya
    // window.closePopup = function() {
    //     popupContainer.style.display = "none"; // Ganti dengan URL halaman berikutnya
    // };
});
