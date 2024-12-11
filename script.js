// Excusas
const excusas = [
    "No puedo ir al gimnasio hoy, el sofá me necesita.",
    "Hoy no, tengo una cita con mi nevera.",
    "Mis músculos están en huelga, no puedo hacerles trabajar.",
    "Tengo que descansar, el cuerpo me lo pide.",
    "Me duelen los músculos solo de pensarlo, mejor lo dejo para mañana.",
    "El gimnasio está demasiado lleno hoy, no puedo concentrarme.",
    "Hoy el gimnasio me parece muy lejos, mejor lo dejo para otro día.",
    "Estoy esperando a que la motivación llegue, aún no ha pasado por mi puerta.",
    "Mi perro está enfermo, tengo que cuidarlo (¿verdad?).",
    "El gym me dijo que me diera el día libre, así que no voy."
];

// Rutinas
const rutinas = [
    {
        nombre: "Muerte 💀",
        descripcion: "Una rutina para los valientes, no apta para cardíacos. Prepárate para sudar hasta el alma.",
        ejercicios: [
            "Press de banca 4x6",
            "Sentadillas con barra 5x5",
            "Peso muerto 4x5",
            "Dominadas 4xMax",
            "Remo con barra 4x6",
            "Curl de bíceps 4x10",
            "Fondos en paralelas 4xMax"
        ]
    },
    {
        nombre: "Fuerza Total",
        descripcion: "¡A aumentar fuerza con estos movimientos esenciales!",
        ejercicios: [
            "Sentadillas con barra 5x5",
            "Press militar 4x6",
            "Peso muerto 5x5",
            "Pull-ups 3xMax",
            "Remo con barra 4x6",
            "Curl de bíceps 3x10"
        ]
    },
    {
        nombre: "Día de Piernas",
        descripcion: "Solo para los verdaderos guerreros de las piernas.",
        ejercicios: [
            "Sentadillas 5x5",
            "Prensa de pierna 4x10",
            "Curl de pierna 4x12",
            "Extensiones de pierna 4x12",
            "Elevación de talones 5x20"
        ]
    },
    {
        nombre: "Full Body",
        descripcion: "Trabajo completo para todos los músculos.",
        ejercicios: [
            "Sentadillas 4x6",
            "Press de banca 4x8",
            "Peso muerto 4x6",
            "Pull-ups 3xMax",
            "Press militar 3x8",
            "Curl de bíceps 3x10"
        ]
    }
];

// Generador de excusas
document.getElementById("excuse-button").addEventListener("click", () => {
    const randomExcuse = excusas[Math.floor(Math.random() * excusas.length)];
    document.getElementById("excuse-output").textContent = randomExcuse;
});

// Generador de rutinas
document.getElementById("routine-button").addEventListener("click", () => {
    const randomRoutine = rutinas[Math.floor(Math.random() * rutinas.length)];
    const rutinaOutput = `
        <strong>${randomRoutine.nombre}</strong><br>
        <em>${randomRoutine.descripcion}</em><br>
        <ul>
            ${randomRoutine.ejercicios.map(ejercicio => `<li>${ejercicio}</li>`).join('')}
        </ul>
    `;
    document.getElementById("routine-output").innerHTML = rutinaOutput;
});
