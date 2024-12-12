const excuses = [
    "No fui porque estaba demasiado ocupado mirándome en el espejo.",
    "Me lesioné levantando mi ego.",
    "El gimnasio estaba lleno de gente que no sabía lo que hacía... incluido yo.",
    "Me olvidé de ponerme desodorante después del entrenamiento.",
    "Estaba practicando para ser el próximo Mr. Universo... de procrastinación.",
    "Mi playlist era demasiado buena para levantarme del sofá."
];

const workouts = [
    "Push-ups hasta que vomites, sentadillas hasta que te caigas, y luego repite.",
    "Corre una maratón... en el gimnasio, de máquina en máquina.",
    "Haz un burpee por cada excusa que has usado esta semana.",
    "Agarra la barra de dominadas y no la sueltes hasta que alguien te rescate."
];

const jokes = [
    "¿Qué hace un culturista en la cama? ¡Flexiones de amor!",
    "¿Por qué el gimnasio es un buen lugar para ligar? Porque todo el mundo está buscando pareja... de mancuernas.",
    "El cardio es como la política, nadie lo entiende pero todos lo critican.",
    "Si el gimnasio fuera fácil, se llamaría 'tu madre'."
];

const facts = [
    "Los Mega Boys no levantan pesas, las pesas se levantan por ellos.",
    "El verdadero ejercicio es tener que explicar a tu madre qué es una proteína.",
    "En el mundo de los Mega Boys, no existen las pesas de 5 kilos, solo las de 'empezar'.",
    "El sudor en el gimnasio no es sudor, es tu cuerpo llorando lágrimas de progreso."
];

const memes = [
    "assets/meme1.jpg",
    "assets/meme2.jpg"
];

// Event listeners for buttons
document.getElementById("excuse-button").addEventListener("click", () => {
    document.getElementById("excuse-output").textContent = excuses[Math.floor(Math.random() * excuses.length)];
});

document.getElementById("workout-button").addEventListener("click", () => {
    document.getElementById("workout-output").textContent = workouts[Math.floor(Math.random() * workouts.length)];
});

document.getElementById("joke-button").addEventListener("click", () => {
    document.getElementById("joke-output").textContent = jokes[Math.floor(Math.random() * jokes.length)];
});

document.getElementById("fact-button").addEventListener("click", () => {
    document.getElementById("fact-output").textContent = facts[Math.floor(Math.random() * facts.length)];
});

document.getElementById("meme-button").addEventListener("click", () => {
    const memeUrl = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById("meme-output").innerHTML = `<img src="${memeUrl}" alt="Meme Mega Boys" />`;
});

document.getElementById("poll-button").addEventListener("click", () => {
    document.getElementById("poll-output").textContent = "¿Cuál es el mejor ejercicio? A) El que nunca haces B) El que haces mal C) El de la máquina que siempre está ocupada.";
});

document.getElementById("join-fanclub-button").addEventListener("click", () => {
    document.getElementById("fanclub-output").textContent = "¡Ahora eres parte de la legión de los Mega Boys! Prepárate para el culto al músculo.";
});

document.getElementById("contact-link").addEventListener("click", () => {
    alert("¡Te has atrevido a contactarnos! Te responderemos... si tenemos tiempo entre serie y serie.");
});
