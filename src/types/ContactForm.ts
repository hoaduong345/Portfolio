export interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactFormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  isError: boolean;
  message: string;
}