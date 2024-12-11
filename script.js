const excuses = [
    "Hoy no puedo, Juanjo dejó la barra y me fui detrás.",
    "Diego me intimidó levantando 100kg, mejor me quedo en casa.",
    "Adri dijo que era día de descanso, y Ángel estuvo de acuerdo.",
    "Mi proteína se cayó al suelo... y con ella mi motivación.",
    "El banco de press me mira raro, mejor mañana."
];

document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});
