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

const jokes = [
    "¿Por qué los culturistas no usan ascensor? Porque prefieren subir el nivel.",
    "¿Qué hace un culturista después de romper con su pareja? Levantar su ánimo... y pesas.",
    "¿Cuál es el ejercicio favorito de un culturista? El press... de impresionar.",
    "¿Por qué los culturistas no pueden guardar secretos? Porque siempre están levantando sospechas.",
    "¿Qué hace un culturista en la playa? Levantar arena."
];

const facts = [
    "El músculo más fuerte del cuerpo humano es el masetero, que se encuentra en la mandíbula.",
    "El récord mundial de levantamiento de pesas es de más de 500 kg.",
    "El culturismo moderno comenzó en el siglo XIX con Eugen Sandow, conocido como el 'padre del culturismo'.",
    "El ejercicio regular puede mejorar tu estado de ánimo y reducir los síntomas de depresión y ansiedad.",
    "El músculo más grande del cuerpo humano es el glúteo mayor."
];

const memes = [
    "https://i.imgur.com/1J7Z5Qp.jpg",
    "https://i.imgur.com/2Y7Z5Qp.jpg",
    "https://i.imgur.com/3Z7Z5Qp.jpg",
    "https://i.imgur.com/4A7Z5Qp.jpg",
    "https://i.imgur.com/5B7Z5Qp.jpg"
];

document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});

document.getElementById("workout-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    const workout = workouts[randomIndex];
    document.getElementById("workout-output").innerHTML = `<strong>${workout.name}</strong><br>${workout.exercises.join('<br>')}`;
});

document.getElementById("join-fanclub-button").addEventListener("click", () => {
    document.getElementById("fanclub-output").innerText = "¡Bienvenido al club de fans de los Mega Boys! 🎉";
});

document.getElementById("joke-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke-output").innerText = jokes[randomIndex];
});

document.getElementById("fact-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-output").innerText = facts[randomIndex];
});

document.getElementById("meme-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    document.getElementById("meme-output").innerHTML = `<img src="${memes[randomIndex]}" alt="Meme divertido" style="max-width: 100%; height: auto;">`;
});

document.getElementById("poll-button").addEventListener("click", () => {
    const exercises = ["Sentadillas", "Press de banca", "Peso muerto", "Dominadas", "Abdominales"];
    const randomIndex = Math.floor(Math.random() * exercises.length);
    document.getElementById("poll-output").innerText = `¡Gracias por votar! Tu ejercicio favorito es: ${exercises[randomIndex]}`;
});
