const excuses = [
    "Hoy no puedo, Juanjo ha dejado caer la barra y se rompió mi motivación.",
    "Diego está demasiado motivado, me intimida y prefiero descansar.",
    "Adri dijo que hoy era día de descanso... y no voy a llevarle la contraria.",
    "Ángel prometió venir, pero está en la esquina haciendo selfies.",
    "El gimnasio está cerrado por mantenimiento... según mi imaginación.",
    "Hoy no es mi día, el banco de press me mira mal.",
    "Mi proteína caducó y no puedo entrenar sin ella, es mi combustible."
];

document.getElementById("excuse-button").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    document.getElementById("excuse-output").innerText = excuses[randomIndex];
});
