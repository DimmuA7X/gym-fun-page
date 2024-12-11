const excuses = [
    "No entrené porque me quedé dormido con el teléfono en la mano.",
    "Estaba muy cansado después de levantar demasiadas pesas.",
    "El gimnasio estaba lleno y no me sentía cómodo.",
    "Olvidé las zapatillas de deporte en casa.",
    "Me lastimé con el estiramiento y ahora solo miro los pesos.",
    "Estaba más enfocado en la música que en el entreno."
];

const workouts = [
    "Press de banca 5x5, sentadillas 3x10, remo con barra 4x8.",
    "Press militar 5x5, deadlift 3x5, pull-ups 3x10.",
    "Cardio HIIT 20 min, abdominales 4x20, bíceps curls 4x12.",
    "Lunges 3x15, pull-over 4x10, crunches 4x20."
];

const jokes = [
    "¿Qué hace un pez en el gimnasio? ¡Pesca músculo!",
    "¿Por qué el gym nunca está vacío? ¡Porque siempre hay alguien levantando pesas!",
    "¿Cómo se llama el ejercicio más triste? Cardio…",
    "El único músculo que crece sin esfuerzo es el ego."
];

const facts = [
    "Los Mega Boys pueden hacer más repeticiones de las que creemos... ¡y con estilo!",
    "El gimnasio no está completo sin una buena playlist de rock para entrenar.",
    "El entrenamiento no termina hasta que te haces un selfie en el espejo.",
    "Algunos dicen que los Mega Boys no sudan... ¡simplemente brillan más!"
];

const memes = [
    "https://via.placeholder.com/500x300/ff9800/ffffff?text=Los+Mega+Boys+en+acción!",
    "https://via.placeholder.com/500x300/ff5722/ffffff?text=No+hay+descanso+para+los+Mega+Boys!"
];

document.getElementById("excuse-button").addEventListener("click", function() {
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    document.getElementById("excuse-output").textContent = randomExcuse;
});

document.getElementById("workout-button").addEventListener("click", function() {
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    document.getElementById("workout-output").textContent = randomWorkout;
});

document.getElementById("joke-button").addEventListener("click", function() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke-output").textContent = randomJoke;
});

document.getElementById("fact-button").addEventListener("click", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact-output").textContent = randomFact;
});

document.getElementById("meme-button").addEventListener("click", function() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById("meme-output").innerHTML = `<img src="${randomMeme}" alt="Meme Mega Boys" />`;
});

document.getElementById("poll-button").addEventListener("click", function() {
    const pollAnswer = "Press de banca, ¡sin duda!";
    document.getElementById("poll-output").textContent = pollAnswer;
});

document.getElementById("join-fanclub-button").addEventListener("click", function() {
    document.getElementById("fanclub-output").textContent = "¡Bienvenido al club de fans de Mega Boys! ¡Vamos por esos músculos!";
});

document.getElementById("contact-link").addEventListener("click", function() {
    alert("¡Gracias por contactarnos! ¡Nos encanta conectar con nuestros fans!");
});
