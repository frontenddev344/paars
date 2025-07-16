// Open/Close Nav
function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}



//  header sticky js start  
const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 40) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
//  header sticky js end



// Show modal on every .getInTouch click (all matching buttons)
document.querySelectorAll('.getInTouch').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.getElementById('contactModal').style.display = 'flex';
    });
});

// Close modal on X (close button) click
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('contactModal').style.display = 'none';
});

// Close modal when clicking outside the modal content
document.getElementById('contactModal').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});


document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const icon = dropdown.querySelector(".sub-menu-icon");
    const submenu = dropdown.querySelector(".sub-menu");

    if (icon) {
        icon.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event from bubbling up

            // Close other submenus
            document.querySelectorAll(".sub-menu").forEach((menu) => {
                if (menu !== submenu) {
                    menu.classList.remove("show-submenu");
                }
            });

            submenu.classList.toggle("show-submenu");
        });
    }
});

// Close submenus when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".sub-menu").forEach((menu) => {
            menu.classList.remove("show-submenu");
        });
    }
});
