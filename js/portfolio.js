
document.addEventListener("DOMContentLoaded", () => {

    // Automatically update the current year
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight active navigation based on current page
    const tabs = document.querySelectorAll(".tabs a");

    const currentPath = window.location.pathname;

    tabs.forEach(tab => {
        const tabUrl = new URL(tab.href, window.location.origin);

        const isActive = tabUrl.pathname === currentPath;

        if (isActive) {
            tab.setAttribute("aria-current", "page");
        } else {
            tab.removeAttribute("aria-current");
        }
    });

    // Smooth page entrance
    const content = document.querySelector("main");

    if (content) {
        content.classList.add("page-loaded");
    }

});
