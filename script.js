document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".experience-menu a");
    const sections = document.querySelectorAll(".experience-content > div");
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    function highlightMenu() {
        let scrollPosition = window.scrollY;

        menuLinks.forEach(link => link.classList.remove("active")); // Remove 'active' once

        sections.forEach((section) => {
            let sectionTop = section.getBoundingClientRect().top + window.scrollY;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop - headerHeight && scrollPosition < sectionTop + sectionHeight - headerHeight) {
                let activeLink = document.querySelector(`.experience-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }

    window.addEventListener("scroll", highlightMenu);
});