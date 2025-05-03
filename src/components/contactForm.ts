import { useState } from 'react';
import { FormValues, FormErrors, ContactFormStatus } from '../types/ContactForm';
import { validateForm, sendContactEmail } from './contact';

export const useContactForm = (initialValues: FormValues = { name: '', email: '', phone: '', message: '' }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<ContactFormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: '',
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  // Reset form to initial state
  const resetForm = () => {
    setFormValues(initialValues);
    setErrors({});
    setFormStatus({
      isSubmitting: false,
      isSubmitted: false,
      isError: false,
      message: '',
    });
  };

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    
    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      setFormStatus({
        ...formStatus,
        isSubmitting: true,
        isError: false,
        message: '',
      });
      
      try {
        const response = await sendContactEmail(formValues);
        
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: !response.success,
          message: response.message,
        });
        
        if (response.success) {
          // Reset form values on success
          setFormValues(initialValues);
        }
      } catch (error) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: true,
          message: 'An unexpected error occurred. Please try again later.',
        });
      }
    }
  };

  return {
    formValues,
    errors,
    formStatus,
    handleChange,
    handleSubmit,
    resetForm,
  };
};