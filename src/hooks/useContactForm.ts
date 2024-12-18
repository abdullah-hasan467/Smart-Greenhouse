import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  formData: FormData;
  showNotification: boolean;
  notificationType: 'success' | 'error';
  notificationMessage: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
};

export function useContactForm() {
  const [state, setState] = useState<FormState>({
    formData: initialFormData,
    showNotification: false,
    notificationType: 'success',
    notificationMessage: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setState(prev => ({
      ...prev,
      formData: {
        ...prev.formData,
        [field]: value
      }
    }));
  };

  const resetForm = () => {
    setState(prev => ({
      ...prev,
      formData: initialFormData
    }));
  };

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setState(prev => ({
      ...prev,
      showNotification: true,
      notificationType: type,
      notificationMessage: message
    }));

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        showNotification: false
      }));
    }, 3000);
  };

  const hideNotification = () => {
    setState(prev => ({
      ...prev,
      showNotification: false
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      showNotification('Message sent successfully!');
      resetForm();
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    }
  };

  return {
    formData: state.formData,
    showNotification: state.showNotification,
    notificationType: state.notificationType,
    notificationMessage: state.notificationMessage,
    updateFormData,
    handleSubmit,
    hideNotification
  };
}