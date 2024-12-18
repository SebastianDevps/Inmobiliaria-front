import { useState, useEffect } from "react";
import { inmobiliario } from "../dataInmobiliarios";
import { toast } from "react-toastify";

export const useDetailLogic = (id) => {
  const [inmo, setInmo] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  useEffect(() => {
    const inmueble = inmobiliario.find((e) => e.id === parseInt(id));
    setInmo(inmueble);
  }, [id]);

  // Manejo de tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const isActiveTab = (tab) => activeTab === tab;

  // Manejo del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número de WhatsApp (reemplaza con tu número)
    const phoneNumber = "573017317519";

    // Crear mensaje formateado
    const message = `
¡Hola! Me interesa la propiedad ${inmo?.titulo} 🏠

*Datos del interesado:*
- Nombre: ${formData.nombre}
- Email: ${formData.email}

*Mensaje:*
${formData.mensaje}

*Detalles de la propiedad:*
- Ubicación: ${inmo?.ubicacion}
- Precio: $${inmo?.precio?.toLocaleString()}
- Link: ${window.location.href}
        `.trim();

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    toast.success("¡Te redirigimos a WhatsApp!");

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    }, 1000);
  };

  const handleCompartirClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado al portapapeles");
  };

  return {
    inmo,
    activeImage,
    setActiveImage,
    activeTab,
    handleTabChange,
    isActiveTab,
    formData,
    handleInputChange,
    handleSubmit,
    handleCompartirClick,
  };
};
