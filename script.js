// CONTACT JUMP FIX
window.addEventListener("load", () => {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});

// 2. Particles.js Config - Neon dots + lines
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#00e6ff", "#731bb1", "#0066ff"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00e6ff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.8,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

// 3. Typing Animation
const words = [
  "Full Stack Developer",
  "Frontend Developer",
  "UI/UX Designer",
  "Java Developer",
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    typingElement.textContent = currentWord.substring(0, j);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && j === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// 4. Resume Button Function
function viewAndDownload() {
  window.open("Subasri resume.pdf", "_blank");

  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "Subasri resume.pdf";
    link.download = "Subasri resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 1000);
}
