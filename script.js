const excuses = [
    "No fui porque estaba ocupado trenzándome el pelo.",
    "Me lastimé tratando de levantar mi ego, que pesa más que cualquier barra.",
    "El gimnasio estaba lleno de gente que no entiende de verdad lo que es un hombre.",
    "Me olvidé de mi ropa de gimnasio porque estaba demasiado concentrado en mi selfie matutino.",
    "Estaba practicando para ser el rey de la pereza... o sea, todos los días.",
    "Mi playlist era tan buena que decidí hacer un concierto privado en casa."
];

const workouts = [
    "Push-ups hasta que te desmayes, sentadillas hasta que te rompas, y luego ríete.",
    "Corre hasta que te des cuenta que es más fácil decirlo que hacerlo.",
    "Haz burpees hasta que quieras llorar, pero no puedes porque los hombres no lloran.",
    "Dominadas hasta que alguien te diga que pare porque pareces un mono en el zoo."
];

const jokes = [
    "¿Qué hace un culturista en la cocina? ¡Nada, porque solo sabe hacer omelettes de proteína!",
    "¿Por qué los hombres no cocinan? Porque el fuego es para hacer barbacoas, no tortillas.",
    "El cardio es para los que no pueden levantar pesas. Punto.",
    "Si el gimnasio fuera fácil, sería para chicas."
];

const facts = [
    "Los Mega Boys no sudan, destilan testosterona pura.",
    "La verdadera fuerza es ignorar a tu novia cuando te pide que ayudes en casa.",
    "En el mundo de los Mega Boys, las pesas de menos de 50 kilos son para calentar.",
    "El sudor no es sudor, es el cuerpo liberando toda la mierda que llevas dentro."
];

const memes = [
    "assets/meme1.jpg",
    "assets/meme2.jpg"
];

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
    document.getElementById("poll-output").textContent = "¿Qué es más duro? A) Tu entrenamiento B) La cabeza de tu ex C) El corazón de un Mega Boy.";
});

document.getElementById("join-fanclub-button").addEventListener("click", () => {
    document.getElementById("fanclub-output").textContent = "Te has unido a la hermandad de los que entienden que el gimnasio es vida. Ahora, ¡a entrenar o a morir!";
});

document.getElementById("contact-link").addEventListener("click", () => {
    alert("¿En serio quieres contactarnos? Esperamos que tengas algo interesante que decir, porque si no, te ignoraremos como a una pesa de 2 kilos.");
});
