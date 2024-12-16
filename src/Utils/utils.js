const utils = {
  generateMachineId: () => {
    const components = [
      navigator.userAgent,
      navigator.language,
      new Date().getTimezoneOffset(),
      navigator.hardwareConcurrency,
      window.screen.colorDepth,
      window.screen.width + "x" + window.screen.height,
    ];

    // Crear un hash simple de los componentes
    const hash = components.join("|");
    let machineId = "";
    for (let i = 0; i < hash.length; i++) {
      machineId += hash.charCodeAt(i).toString(16);
    }

    // Guardar en localStorage para mantener consistencia
    localStorage.setItem("machineId", machineId);
    return machineId;
  },

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

export default utils;
