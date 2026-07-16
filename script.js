document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // Smooth scroll for anchor links (fallback/enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // Form submission to WhatsApp
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const product = document.getElementById('product').value;
            
            // Format product name for readability
            let productName = product;
            const productSelect = document.getElementById('product');
            if(productSelect.options[productSelect.selectedIndex]) {
                productName = productSelect.options[productSelect.selectedIndex].text;
            }

            const quantity = document.getElementById('quantity').value || 'Not specified';
            const message = document.getElementById('message').value;

            // Construct WhatsApp message
            const whatsappNumber = '919003329921';
            const text = `*New Quote Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Details:* ${message}\n\nwww.pinenterprises.live`;
            
            // Encode text for URL
            const encodedText = encodeURIComponent(text);
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
            
            // Open in new tab
            window.open(whatsappUrl, '_blank');
            
            // Optional: reset form
            // quoteForm.reset();
        });
    }
});
