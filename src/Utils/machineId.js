export function generateMachineId() {
    const components = [
        navigator.userAgent,
        navigator.language,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency,
        window.screen.colorDepth,
        window.screen.width + 'x' + window.screen.height
    ];

    // Crear un hash simple de los componentes
    const hash = components.join('|');
    let machineId = '';
    for (let i = 0; i < hash.length; i++) {
        machineId += hash.charCodeAt(i).toString(16);
    }

    // Guardar en localStorage para mantener consistencia
    localStorage.setItem('machineId', machineId);
    return machineId;
}

export function getMachineId() {
    let machineId = localStorage.getItem('machineId');
    if (!machineId) {
        machineId = generateMachineId();
    }
    return machineId;
} 