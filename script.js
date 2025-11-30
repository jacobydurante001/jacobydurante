let pages = ["about","education","achievements","family","batchmate"];
let currentPageIndex = 0;

// Show page function
function showPage(pageId){
    pages.forEach(p => document.getElementById(p).classList.remove("active"));
    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav-links a").forEach(link => link.classList.remove("active"));
    document.querySelector(`#nav-${pageId}`).classList.add("active");

    currentPageIndex = pages.indexOf(pageId);

    updateNavButtons();
}

// Update next/prev buttons
function updateNavButtons(){
    document.querySelectorAll(".nav-buttons").forEach(btnContainer => {
        let prevBtn = btnContainer.querySelector(".prev-btn");
        let nextBtn = btnContainer.querySelector(".next-btn");

        if(prevBtn) prevBtn.disabled = (currentPageIndex === 0);
        if(nextBtn) nextBtn.disabled = (currentPageIndex === pages.length - 1);
    });
}

// Navigation click
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
        showPage(link.dataset.page);
        if(window.innerWidth < 768) document.getElementById("navLinks").style.display = "none";
    });
});

// Next/Previous buttons click
document.querySelectorAll(".prev-btn, .next-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        if(btn.classList.contains("next-btn")){
            if(currentPageIndex < pages.length - 1) showPage(pages[currentPageIndex + 1]);
        } else {
            if(currentPageIndex > 0) showPage(pages[currentPageIndex - 1]);
        }
    });
});

// Mobile nav toggle
document.getElementById("navToggle").addEventListener("click", () => {
    let navLinks = document.getElementById("navLinks");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
});
