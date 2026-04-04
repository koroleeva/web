document.addEventListener('DOMContentLoaded', () => {
    const openPopupHeader = document.getElementById("openPopup");
    const submitQuizBtn = document.getElementById("submitQuiz");
    const submitPopupForm = document.getElementById("submitPopup1");

    const popupOverlay = document.getElementById("popupOverlay");
    const overlaySuccess = document.getElementById("overlay");

    const closePopup1 = document.getElementById("closePopup1");
    const closePopup2 = document.getElementById("closePopup2");

    if (openPopupHeader && popupOverlay) {
        openPopupHeader.addEventListener("click", (e) => {
            e.preventDefault();
            popupOverlay.classList.add("active");
        });
    }

    if (submitPopupForm) {
        submitPopupForm.addEventListener("click", (e) => {
            e.preventDefault();
            popupOverlay.classList.remove("active");
            overlaySuccess.classList.add("active");
        });
    }

    if (submitQuizBtn) {
        submitQuizBtn.addEventListener("click", (e) => {
            e.preventDefault();
            overlaySuccess.classList.add("active");
        });
    }

    if (closePopup1) {
        closePopup1.addEventListener("click", () => popupOverlay.classList.remove("active"));
    }
    if (closePopup2) {
        closePopup2.addEventListener("click", () => overlaySuccess.classList.remove("active"));
    }

    window.addEventListener('click', (e) => {
        if (e.target === popupOverlay) popupOverlay.classList.remove("active");
        if (e.target === overlaySuccess) overlaySuccess.classList.remove("active");
    });
});