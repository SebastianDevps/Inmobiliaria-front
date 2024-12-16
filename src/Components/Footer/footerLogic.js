import { toast } from "react-toastify";

const footerLogic = async (props) => {
  if (!props || !props.email) {
    toast.error("Por favor, ingresa un correo electrónico");
    return;
  }

  try {
    if (!props.machineId) {
      toast.error("Error de identificación del dispositivo, intente nuevamente");
      return;
    }

    // Verificar último envío de este dispositivo
    const lastSubmission = localStorage.getItem(`lastSubmission_${props.machineId}`);
    const now = new Date().getTime();

    if (lastSubmission) {
      const timeDiff = now - parseInt(lastSubmission);
      // Permitir solo un envío cada 24 horas
      if (timeDiff < 24 * 60 * 60 * 1000) {
        toast.warning('Por favor espere 24 horas antes de enviar otro email');
        return;
      }
    }

    // Validar formato del email
    if (validateEmail(props.email)) {
      // Guardar el timestamp del envío
      localStorage.setItem(`lastSubmission_${props.machineId}`, now.toString());
      toast.success("Correo registrado correctamente");
    } else {
      toast.error("Por favor, ingresa un correo electrónico válido");
    }

  } catch (error) {
    toast.error("Hubo un error al procesar su solicitud");
    console.error(error);
  }
};

const generateMachineId = () => {
  const components = [
    navigator.userAgent,
    navigator.language,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency,
    window.screen.colorDepth,
    window.screen.width + "x" + window.screen.height,
  ];


  const getMachineId = () => {
    let machineId = localStorage.getItem("machineId");
    if (!machineId) {
      machineId = generateMachineId();
    }
    return machineId;
  };


  const hash = components.join("|");
  let machineId = "";
  for (let i = 0; i < hash.length; i++) {
    machineId += hash.charCodeAt(i).toString(16);
  }

  localStorage.setItem("machineId", machineId);
  return machineId;
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


export default footerLogic;
