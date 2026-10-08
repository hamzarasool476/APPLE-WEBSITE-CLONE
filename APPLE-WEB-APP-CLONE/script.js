/* =========================================
   APPLE INSPIRED WEBSITE
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const searchBtn = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

const supportBtn = document.getElementById("supportBtn");

const toastElement = document.getElementById("siteToast");
const toastMessage = document.getElementById("toastMessage");


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    toastMessage.textContent = message;

    const toast = new bootstrap.Toast(toastElement, {
        delay: 2500
    });

    toast.show();
}


/* =========================================
   SEARCH
========================================= */

searchBtn.addEventListener("click", () => {

    searchOverlay.classList.add("active");

    setTimeout(() => {
        searchInput.focus();
    }, 200);

});


closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("active");

    searchInput.value = "";

});


searchOverlay.addEventListener("click", (event) => {

    if (event.target === searchOverlay) {
        searchOverlay.classList.remove("active");
    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});


/* =========================================
   SEARCH FUNCTION
========================================= */

searchInput.addEventListener("keydown", (event) => {

    if (event.key !== "Enter") {
        return;
    }

    const query = searchInput.value
        .trim()
        .toLowerCase();

    if (!query) {
        showToast("Please enter something to search.");
        return;
    }

    const sections = {
        iphone: "#iphone",
        mac: "#mac",
        ipad: "#ipad",
        watch: "#watch",
        airpods: "#airpods",
        accessories: "#accessories",
        support: "#support",
        store: "#store"
    };

    let found = false;

    for (const key in sections) {

        if (query.includes(key)) {

            found = true;

            searchOverlay.classList.remove("active");

            document.querySelector(sections[key])
                .scrollIntoView({
                    behavior: "smooth"
                });

            break;
        }

    }

    if (!found) {

        showToast(
            `No section found for "${searchInput.value}".`
        );

    }

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

function setTheme(theme) {

    document.documentElement
        .setAttribute("data-theme", theme);

    localStorage.setItem(
        "appleTheme",
        theme
    );

    if (theme === "dark") {

        themeIcon.className =
            "bi bi-sun";

    } else {

        themeIcon.className =
            "bi bi-moon";

    }

}


const savedTheme =
    localStorage.getItem("appleTheme") ||
    "light";

setTheme(savedTheme);


themeBtn.addEventListener("click", () => {

    const currentTheme =
        document.documentElement
            .getAttribute("data-theme");

    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    setTheme(newTheme);

    showToast(
        newTheme === "dark"
            ? "Dark mode enabled."
            : "Light mode enabled."
    );

});


/* =========================================
   SUPPORT BUTTON
========================================= */

supportBtn.addEventListener("click", () => {

    showToast(
        "Apple Support demo opened."
    );

});


/* =========================================
   BUY BUTTONS
========================================= */

document
    .querySelectorAll(".apple-link")
    .forEach(link => {

        link.addEventListener("click", (event) => {

            const href =
                link.getAttribute("href");

            if (href === "#") {

                event.preventDefault();

                showToast(
                    "This is a demo product page."
                );

            }

        });

    });


/* =========================================
   ACCESSORY BUTTONS
========================================= */

document
    .querySelectorAll(".accessory-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const product =
                button
                    .closest(".accessory-card")
                    .querySelector("h4")
                    .textContent;

            showToast(
                `${product} added to your bag.`
            );

        });

    });


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".apple-navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 4px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================
   CLOSE MOBILE NAV AFTER CLICK
========================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            const navbarCollapse =
                document.getElementById("appleNav");

            if (
                navbarCollapse.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse
                        .getInstance(navbarCollapse);

                if (collapse) {
                    collapse.hide();
                }

            }

        });

    });


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".product-card, .accessory-card, .support-box"
    );

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================
   KEYBOARD SHORTCUT
========================================= */

document.addEventListener("keydown", event => {

    // Ctrl + K opens search

    if (
        event.ctrlKey &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        searchOverlay.classList.add("active");

        setTimeout(() => {
            searchInput.focus();
        }, 100);

    }

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "Apple-inspired website loaded successfully."
);