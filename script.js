const excuses = [
    "Hoy no puedo, Juanjo dejó la barra y me fui detrás.",
    "Diego me intimidó levantando 100kg, mejor me quedo en casa.",
    "Adri dijo que era día de descanso, y Ángel estuvo de acuerdo.",
    "Mi proteína se cayó al suelo... y con ella mi motivación.",
    "El banco de press me mira raro, mejor mañana."
];

const workouts = [
    {
        name: "Rutina Básica",
        exercises: [
            "3x10 Sentadillas",
            "3x10 Press de banca",
            "3x10 Peso muerto",
            "3x10 Dominadas",
            "3x15 Abdominales"
        ]
    },
    {
        name: "Rutina Intermedia",
        exercises: [
            "4x12 Sentadillas con salto",
            "4x12 Press militar",
            "4x12 Peso muerto rumano",
            "4x12 Remo con barra",
            "4x20 Plancha"
        ]
    },
    {
        name: "Rutina Avanzada",
        exercises: [
            "5x15 Sentadillas búlgaras",
            "5x15 Press de banca inclinado",
            "5x15 Peso muerto sumo",
            "5x15 Fondos en paralelas",
            "5x30 Bicicleta"
        ]
    },
    {
        name: "Muerte 💀",
        exercises: [
            "6x20 Sentadillas con barra",
            "6x20 Press de banca con mancuernas",
            "6x20 Peso muerto convencional",
            "6x20 Dominadas lastradas",
            "6x50 Burpees"
        ]
    }
];

document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});

document.getElementById("workout-button").addEventListener("click", () => {
    const random
