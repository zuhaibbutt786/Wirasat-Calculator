// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateContactForm(formData)) {
                // Show loading state
                const submitBtn = this.querySelector('.btn');
                const originalText = submitBtn.textContent;
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission (in real app, this would send to server)
                setTimeout(() => {
                    showContactSuccess();
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
});

// Validate contact form
function validateContactForm(data) {
    let isValid = true;
    const errors = [];
    
    // Check name
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
        isValid = false;
    }
    
    // Check subject
    if (!data.subject) {
        errors.push('Please select a subject');
        isValid = false;
    }
    
    // Check message
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
        isValid = false;
    }
    
    // Show errors if any
    if (!isValid) {
        showContactErrors(errors);
    }
    
    return isValid;
}

// Show contact form errors
function showContactErrors(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.contact-error');
    existingErrors.forEach(error => error.remove());
    
    // Create error container
    const errorContainer = document.createElement('div');
    errorContainer.className = 'contact-error';
    errorContainer.style.cssText = `
        background: #fee;
        border: 1px solid #fcc;
        color: #c33;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
    `;
    
    // Add error messages
    const errorList = document.createElement('ul');
    errorList.style.cssText = 'margin: 0; padding-left: 20px;';
    
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        errorList.appendChild(li);
    });
    
    errorContainer.appendChild(errorList);
    
    // Insert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(errorContainer, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        errorContainer.remove();
    }, 5000);
}

// Show contact success message
function showContactSuccess() {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.contact-success, .contact-error');
    existingMessages.forEach(msg => msg.remove());
    
    // Create success message
    const successContainer = document.createElement('div');
    successContainer.className = 'contact-success';
    successContainer.style.cssText = `
        background: #efe;
        border: 1px solid #cfc;
        color: #3c3;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        text-align: center;
    `;
    
    successContainer.innerHTML = `
        <h3 style="margin: 0 0 10px 0;">✅ Message Sent Successfully!</h3>
        <p style="margin: 0;">Thank you for contacting us. We'll get back to you within 24-48 hours.</p>
    `;
    
    // Insert before form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successContainer, form);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        successContainer.remove();
    }, 8000);
} 