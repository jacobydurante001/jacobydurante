function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");

    // Highlight active navbar link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
    });

    document.getElementById("nav-" + pageId).classList.add("active");
}
