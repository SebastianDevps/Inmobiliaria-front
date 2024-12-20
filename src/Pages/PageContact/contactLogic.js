import { useState } from 'react';
import { toast } from 'react-toastify';

export const useContact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoPropiedad: 'casa',
    mensaje: '',
    presupuesto: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      toast.success('Formulario enviado correctamente');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de envío
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoPropiedad: 'casa',
        mensaje: '',
        presupuesto: ''
      });
    } catch (err) {
      toast.error('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    error,
    success,
    handleChange,
    handleSubmit
  };
};
