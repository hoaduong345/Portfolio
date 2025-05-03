import { FormValues } from '../types/ContactForm';

// Contact form configuration
export const contactConfig = {
  email: 'vanhoa284@gmail.com',
  phone: '0849888897',
  location: 'Buon Ma Thuot, DakLak',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/hoa-truong-705156292/',
    github: 'https://github.com/hoaduong345'
  }
};

// Validation functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return emailRegex.test(email);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

// Form validation
export function validateForm(values: FormValues): Record<string, string | undefined> {
  const errors: Record<string, string | undefined> = {};
  
  if (!validateRequired(values.name)) {
    errors.name = 'Name is required';
  }
  
  if (!validateRequired(values.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!validateRequired(values.message)) {
    errors.message = 'Message is required';
  }
  
  return errors;
}

// Send email function (mock implementation)
export async function sendContactEmail(data: FormValues): Promise<{ success: boolean; message: string }> {
  try {
    // This is where you would integrate with an email service like EmailJS, SendGrid, etc.
    // For now, we'll just simulate a successful API call
    console.log('Sending email with data:', data);
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Return success response
    return {
      success: true,
      message: 'Your message has been sent successfully!'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.'
    };
  }
}

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
