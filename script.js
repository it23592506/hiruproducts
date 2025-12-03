// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ========================================
// ANIMATE ON SCROLL
// ========================================
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});

// ========================================
// ZOOM ON SCROLL EFFECT FOR IMAGES
// ========================================
const zoomImages = document.querySelectorAll('.zoom-on-scroll');

const zoomObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zoomed');
        } else {
            entry.target.classList.remove('zoomed');
        }
    });
}, {
    threshold: 0.3
});

zoomImages.forEach(image => {
    zoomObserver.observe(image);
});

// ========================================
// PARALLAX SCROLLING EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach(section => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        section.style.backgroundPositionY = `${yPos}px`;
    });

    // Multi-layer scrolling background effect for products section
    const layer1 = document.querySelector('.scroll-background-layer.layer-1');
    const layer2 = document.querySelector('.scroll-background-layer.layer-2');
    const layer3 = document.querySelector('.scroll-background-layer.layer-3');

    if (layer1) {
        const sectionTop = document.querySelector('.products-section').offsetTop;
        const offset = scrolled - sectionTop;
        
        // Each layer moves at different speed for depth effect
        layer1.style.transform = `translateY(${offset * 0.3}px)`;
        layer2.style.transform = `translateY(${offset * 0.5}px)`;
        layer3.style.transform = `translateY(${offset * 0.7}px)`;
    }

    // Multi-layer scrolling background effect for heritage section
    const heritageLayer1 = document.querySelector('.scroll-background-layer.heritage-layer-1');
    const heritageLayer2 = document.querySelector('.scroll-background-layer.heritage-layer-2');
    const heritageLayer3 = document.querySelector('.scroll-background-layer.heritage-layer-3');

    if (heritageLayer1) {
        const heritageSectionTop = document.querySelector('.heritage-section').offsetTop;
        const heritageOffset = scrolled - heritageSectionTop;
        
        // Each layer moves at different speed for depth effect
        heritageLayer1.style.transform = `translateY(${heritageOffset * 0.3}px)`;
        heritageLayer2.style.transform = `translateY(${heritageOffset * 0.5}px)`;
        heritageLayer3.style.transform = `translateY(${heritageOffset * 0.7}px)`;
    }
});

// ========================================
// COUNTER ANIMATION FOR STATS
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 100 ? '%' : '+');
        }
    };

    updateCounter();
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// BACK TO TOP BUTTON
// ========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// CONTACT FORM SUBMISSION
// ========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ========================================
// PRODUCT IMAGE GALLERY ZOOM EFFECT
// ========================================
const productImages = document.querySelectorAll('.product-image');

productImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;
        
        image.style.transformOrigin = `${50 + percentX * 10}% ${50 + percentY * 10}%`;
    });
    
    image.addEventListener('mouseleave', () => {
        image.style.transformOrigin = 'center center';
    });
});

// ========================================
// TYPING EFFECT FOR HERO TAGLINE
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect if on homepage
const heroTagline = document.querySelector('.hero-tagline');
if (heroTagline && window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    const originalText = heroTagline.textContent;
    setTimeout(() => {
        // typeWriter(heroTagline, originalText, 80);
    }, 1500);
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// ========================================
// PRODUCT CARD TILT EFFECT
// ========================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ========================================
// QUALITY CARD STAGGER ANIMATION
// ========================================
const qualityCards = document.querySelectorAll('.quality-card');

const qualityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

qualityCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    qualityObserver.observe(card);
});

// ========================================
// VARIETY CARD STAGGER ANIMATION
// ========================================
const varietyCards = document.querySelectorAll('.variety-card');

const varietyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

varietyCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    varietyObserver.observe(card);
});

// ========================================
// BREATHING ANIMATION FOR HERO IMAGES
// ========================================
const heroImages = document.querySelectorAll('.product-hero-image img');

heroImages.forEach(image => {
    let scale = 1;
    let growing = true;
    
    setInterval(() => {
        if (growing) {
            scale += 0.001;
            if (scale >= 1.02) growing = false;
        } else {
            scale -= 0.001;
            if (scale <= 1) growing = true;
        }
        image.style.transform = `scale(${scale})`;
    }, 50);
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.brewing-step, .comparison-row');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
});

// Initialize brewing steps and comparison rows
document.querySelectorAll('.brewing-step').forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-50px)';
    step.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

document.querySelectorAll('.comparison-row').forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-30px)';
    row.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
});

// ========================================
// CURSOR TRAIL EFFECT (OPTIONAL)
// ========================================
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ========================================
// INITIALIZE ALL ANIMATIONS ON PAGE LOAD
// ========================================
window.addEventListener('load', () => {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Trigger any initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animate-fade-in');
    }
});

// ========================================
// PAGE TRANSITION EFFECT
// ========================================
document.querySelectorAll('a:not([href^="#"])').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply to internal links
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            e.preventDefault();
            
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        }
    });
});

// Fade in page on load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

console.log('HIRU Consumer Products - Website Loaded Successfully! 🍵✨');
