const particles = document.getElementById("particles");

for(let i = 0; i < 60; i++){

let particle = document.createElement("span");

particle.classList.add("particle");

particle.style.left = Math.random()*100 + "vw";

particle.style.animationDuration =
(Math.random()*5+5)+"s";

particle.style.animationDelay =
Math.random()*5+"s";

particles.appendChild(particle);

}