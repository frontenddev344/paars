  // Open/Close Nav
  function openNav() {
    document.getElementById("mySidenavs").classList.add("open");
    document.getElementById("menuOverlay").classList.add("active");
}

function closeNav() {
    document.getElementById("mySidenavs").classList.remove("open");
    document.getElementById("menuOverlay").classList.remove("active");
}

// Ripple effect on button
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.querySelector('.btn-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const button = e.currentTarget;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }

    // Scroll animation for service cards
    const cards = document.querySelectorAll('.our_service_card');
    if (cards.length > 0) {
        function revealOnScroll() {
            const trigger = window.innerHeight * 0.92;
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < trigger) {
                    setTimeout(() => card.classList.add('animated'), i * 120);
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // initial
    }
});

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



// Show modal on page load
// window.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('contactModal').style.display = 'flex';
//   });
  
//   // Close modal on X click
//   document.getElementById('closeModal').onclick = function() {
//     document.getElementById('contactModal').style.display = 'none';
//   };
  
//   // Optional: Close modal when clicking outside the modal content
//   document.getElementById('contactModal').onclick = function(e) {
//     if (e.target === this) {
//       this.style.display = 'none';
//     }
//   };