
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




$(document).ready(function () {
    $('.our_clients_sec').slick({
        speed: 5000,
        margin: 20,
        autoplay: true,
        loop: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.responsive').on('mouseenter', function () {
        $(this).slick('slickPause');
    });

    $('.responsive').on('mouseleave', function () {
        $(this).slick('slickPlay');
    });
});


$(document).ready(function () {
    $('.responsive-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 600,
        arrows: true,
        dots: false,
        prevArrow: $('#prevBtn'),
        nextArrow: $('#nextBtn'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});




