// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navBg = document.getElementById('nav-bg');
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileOverlay = document.getElementById('mobile-overlay');

function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.remove('nav-transparent');
        navbar.classList.add('nav-glass');
        if (navBg) {
            navBg.classList.remove('opacity-0');
        }
    } else {
        navbar.classList.add('nav-transparent');
        navbar.classList.remove('nav-glass');
        if (navBg) {
            navBg.classList.add('opacity-0');
        }
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

// Mobile menu
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        mobileToggle.classList.add('hamburger-active');
        document.body.style.overflow = 'hidden';
    });
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    mobileToggle.classList.remove('hamburger-active');
    document.body.style.overflow = '';
}

// Close on escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Mobile dropdown toggle
function toggleMobileDropdown() {
    const dropdown = document.getElementById('mobile-services-dropdown');
    const arrow = document.getElementById('mobile-dropdown-arrow');
    
    if (dropdown && arrow) {
        dropdown.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    }
}

// Make toggleMobileDropdown globally available
window.toggleMobileDropdown = toggleMobileDropdown;

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPage === href || currentPage.includes(href.replace('/', '')))) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// Accessibility - High Contrast
const contrastToggle = document.getElementById('contrast-toggle');
if (contrastToggle) {
    contrastToggle.addEventListener('change', (e) => {
        document.body.classList.toggle('high-contrast', e.target.checked);
    });
}

// Accessibility - Reduced Motion
const motionToggle = document.getElementById('motion-toggle');
if (motionToggle) {
    motionToggle.addEventListener('change', (e) => {
        document.body.classList.toggle('reduce-motion', e.target.checked);
    });
}

// Accessibility - Font Size
const fontSmall = document.getElementById('font-small');
const fontMedium = document.getElementById('font-medium');
const fontLarge = document.getElementById('font-large');

if (fontSmall) {
    fontSmall.addEventListener('click', () => {
        document.body.classList.remove('text-large', 'text-xlarge');
    });
}

if (fontMedium) {
    fontMedium.addEventListener('click', () => {
        document.body.classList.remove('text-large', 'text-xlarge');
    });
}

if (fontLarge) {
    fontLarge.addEventListener('click', () => {
        document.body.classList.add('text-large');
        document.body.classList.remove('text-xlarge');
    });
}
