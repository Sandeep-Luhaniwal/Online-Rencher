document.addEventListener("DOMContentLoaded", function () {
    var openPopupButtonDesktop = document.getElementById("open-popup-desktop");
    var openPopupButtonMobile = document.getElementById("open-popup-mobile");
    var closePopupButton = document.getElementById("close-popup");
    var overlay = document.getElementById("overlay");
    var popupParent = document.getElementById("popup-parent");

    openPopupButtonDesktop.addEventListener("click", function () {
        openPopup();
    });

    openPopupButtonMobile.addEventListener("click", function () {
        openPopup();
    });

    closePopupButton.addEventListener("click", function () {
        closePopup();
    });

    overlay.addEventListener("click", function () {
        closePopup();
    });

    // Function to open the popup
    function openPopup() {
        overlay.classList.remove("hidden");
        popupParent.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
    }

    // Function to close the popup
    function closePopup() {
        overlay.classList.add("hidden");
        popupParent.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }
});