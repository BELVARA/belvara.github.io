window.addEventListener("DOMContentLoaded", function() {
    const popupContainer = document.getElementById("popupContainer");
    
    const popupContent = document.querySelector(".popup-content");
    // popupContent.style.backgroundImage = "url('../img/gif2_rumah_siap_huni.gif')";
    
    window.closePopup = function() {
        document.getElementById("popupContainer").style.display = "none";
    }
});