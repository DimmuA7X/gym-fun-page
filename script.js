// Definición de excusas, entrenamientos, chistes y más
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

// Función para generar una excusa aleatoria
document.getElementById("excuse-button").addEventListener("click", function() {
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
    const output = document.getElementById("excuse-output");
    output.textContent = randomExcuse;
    output.classList.add('fade-in');  // Añadir animación de desvanecimiento
    setTimeout(() => output.classList.remove('fade-in'), 500);  // Quitar animación después de que termine
});

// Función para generar un entrenamiento aleatorio
document.getElementById("workout-button").addEventListener("click", function() {
    const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
    const output = document.getElementById("workout-output");
    output.textContent = randomWorkout;
    output.classList.add('zoom-in');  // Añadir animación de zoom
    setTimeout(() => output.classList.remove('zoom-in'), 500);  // Quitar animación después de que termine
});

// Función para contar un chiste aleatorio
document.getElementById("joke-button").addEventListener("click", function() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    const output = document.getElementById("joke-output");
    output.textContent = randomJoke;
    output.classList.add('slide-in');  // Añadir animación de deslizamiento
    setTimeout(() => output.classList.remove('slide-in'), 500);  // Quitar animación después de que termine
});

// Función para mostrar un hecho aleatorio
document.getElementById("fact-button").addEventListener("click", function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const output = document.getElementById("fact-output");
    output.textContent = randomFact;
    output.classList.add('fade-in');
    setTimeout(() => output.classList.remove('fade-in'), 500);
});

// Función para mostrar un meme aleatorio
document.getElementById("meme-button").addEventListener("click", function() {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    const output = document.getElementById("meme-output");
    output.innerHTML = `<img src="${randomMeme}" alt="Meme Mega Boys" class="meme-image" />`;
    output.classList.add('meme-zoom');
    setTimeout(() => output.classList.remove('meme-zoom'), 500);  // Zoom en el meme
});

// Función para mostrar una respuesta de encuesta
document.getElementById("poll-button").addEventListener("click", function() {
    const pollAnswer = "Press de banca, ¡sin duda!";
    const output = document.getElementById("poll-output");
    output.textContent = pollAnswer;
    output.classList.add('slide-in');
    setTimeout(() => output.classList.remove('slide-in'), 500);
});

// Función para unirse al club de fans
document.getElementById("join-fanclub-button").addEventListener("click", function() {
    const fanclubOutput = document.getElementById("fanclub-output");
    fanclubOutput.textContent = "¡Bienvenido al club de fans de Mega Boys! ¡Vamos por esos músculos!";
    fanclubOutput.classList.add('fanclub-message');
    setTimeout(() => fanclubOutput.classList.remove('fanclub-message'), 500);  // Efecto de bienvenida
});

// Función de contacto
document.getElementById("contact-link").addEventListener("click", function() {
    alert("¡Gracias por contactarnos! ¡Nos encanta conectar con nuestros fans!");
});

// Función de animación de página
window.addEventListener("load", function() {
    document.body.classList.add('page-loaded');
});
