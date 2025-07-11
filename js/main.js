function openNav() {
    document.getElementById("mySidenavs").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenavs").style.width = "0";
}

document.querySelector('.btn-contact').addEventListener('click', function(e) {
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


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.our_service_card');
    function revealOnScroll() {
        const trigger = window.innerHeight * 0.92;
        cards.forEach((card, i) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < trigger) {
                setTimeout(() => card.classList.add('animated'), i * 120); // staggered
            }
        });
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // initial check
});

