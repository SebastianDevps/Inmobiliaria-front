

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

