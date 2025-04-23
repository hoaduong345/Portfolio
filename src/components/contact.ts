// filepath: d:\portfolio\src\components\contactForm.ts
export function setupContactForm(): void {
  const contactForm = document.getElementById('contact-form') as HTMLFormElement;
  
  if (!contactForm) {
    console.error('Contact form not found');
    return;
  }
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formValues);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset the form
    contactForm.reset();
  });
}
