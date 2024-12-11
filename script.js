const excuses = [
    "Hoy no puedo, mi pez murió y estoy triste.",
    "Hace frío, mejor mañana.",
    "Mi smartwatch no tiene batería, ¿cómo voy a contar las calorías?",
    "Estoy practicando descanso activo desde el sofá.",
    "La barra me mira mal, paso."
];

document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});
