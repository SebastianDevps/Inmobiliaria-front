const generateMachineId = () => {
  const components = [
    navigator.userAgent,
    navigator.language,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency,
    window.screen.colorDepth,
    window.screen.width + "x" + window.screen.height,
  ];

  const hash = components.join("|");
  let machineId = "";
  for (let i = 0; i < hash.length; i++) {
    machineId += hash.charCodeAt(i).toString(16);
  }

  localStorage.setItem("machineId", machineId);
  return machineId;
};

export const utils = {
  generateMachineId,
  getMachineId: () => {
    let machineId = localStorage.getItem("machineId");
    if (!machineId) {
      machineId = generateMachineId();
    }
    return machineId;
  },
  priceFormatter: (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  },
};

