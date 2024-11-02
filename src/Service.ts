import { FormEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handleContactFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;
  const formData: ContactFormData = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    email: (form.elements.namedItem('email') as HTMLInputElement).value,
    message: (form.elements.namedItem('message') as HTMLInputElement).value,
  };

  // Now you can use formData
  console.log(formData);
};
