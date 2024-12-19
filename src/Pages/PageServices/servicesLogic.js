import { useState } from "react";
import { services, horariosDisponibles } from "../../Components/data";
import { toast } from "react-toastify";

export const useServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [open, setOpen] = useState(false);

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsapp = () => {
    toast.success("Te redirigiremos a WhatsApp");
    setTimeout(() => {
      window.open("https://wa.me/59899123456", "_blank");
    }, 1000);
  };

  return {
    services,
    horariosDisponibles,
    activeService,
    handleServiceClick,
    open,
    handleOpen,
    handleClose,
    handleWhatsapp,
  };
};
