// Excusas para el generador
const excuses = [
    "Estoy esperando un paquete.",
    "Mi perro está enfermo.",
    "Me ha surgido una cita importante de último momento.",
    "No me encuentro bien hoy.",
    "El tráfico está horrible.",
    "Me olvidé completamente.",
    "Tuve un contratiempo en casa.",
    "Mi jefe me pidió algo urgente.",
    "Perdí la noción del tiempo.",
    "He tenido que hacer algo de último momento para mi familia."
];

// Rutinas de fuerza
const routines = [
    {
        level: "Principiante",
        routine: [
            "Sentadillas - 3 series de 12 repeticiones",
            "Press de banca - 3 series de 10 repeticiones",
            "Remo con barra - 3 series de 12 repeticiones",
            "Fondos en paralelas - 3 series de 8 repeticiones",
            "Plancha - 3 series de 30 segundos"
        ]
    },
    {
        level: "Intermedio",
        routine: [
            "Sentadillas - 4 series de 8 repeticiones",
            "Press militar - 4 series de 10 repeticiones",
            "Peso muerto - 4 series de 6 repeticiones",
            "Pull-ups - 4 series de 8 repeticiones",
            "Crunches - 4 series de 25 repeticiones"
        ]
    },
    {
        level: "Avanzado",
        routine: [
            "Sentadillas con barra - 5 series de 5 repeticiones",
            "Press de banca inclinado - 5 series de 5 repeticiones",
            "Peso muerto rumano - 5 series de 5 repeticiones",
            "Dominadas con lastre - 5 series de 6 repeticiones",
            "Elevaciones de piernas - 5 series de 20 repeticiones"
        ]
    },
    {
        level: "Muerte 💀",
        routine: [
            "Sentadillas con 2x BW (peso corporal) - 6 series de 3 repeticiones (pausas isométricas de 3 segundos en el fondo)",
            "Press de banca con pausa en el pecho - 5 series de 5 repeticiones (10 segundos de pausa en cada repetición)",
            "Peso muerto con 1,5x BW - 5 series de 3 repeticiones (con técnica de ‘slow eccentrics’ en la bajada)",
            "Dominadas con 20kg de lastre - 6 series de 4 repeticiones (superconjunto con flexiones explosivas al fallo)",
            "Hip Thrust con barra (2x BW) - 6 series de 6 repeticiones",
            "Snatches con kettlebell - 5 series de 4 repeticiones por lado (alta intensidad, con intervalos de descanso de 45 segundos)",
            "Paseo del granjero con mancuernas pesadas - 4 series de 30 metros (mantener la tensión durante todo el recorrido)",
            "Técnica de sobrecarga progresiva en curl de bíceps (6 series de 10 repeticiones con aumento de peso cada 2 series)"
        ]
    }
];

// Funcionalidad para el generador de excusas
document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});

// Funcionalidad para el generador de rutinas
document.getElementById("routine-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * routines.length);
    const routine = routines[randomIndex].routine;
    let routineText = `<strong>Rutina para ${routines[randomIndex].level}:</strong><ul>`;
    routine.forEach(exercise => {
        routineText += `<li>${exercise}</li>`;
    });
    routineText += "</ul>";
    document.getElementById("routine-output").innerHTML = routineText;
});

// Funcionalidad para la rutina "Muerte 💀"
document.getElementById("death-button").addEventListener("click", () => {
    const routineDeath = routines.find(routine => routine.level === "Muerte 💀").routine;
    let routineDeathText = `<strong>¡Rutina Muerte 💀!</strong><ul>`;
    routineDeath.forEach(exercise => {
        routineDeathText += `<li>${exercise}</li>`;
    });
    routineDeathText += "</ul>";
    document.getElementById("death-output").innerHTML = routineDeathText;
});
