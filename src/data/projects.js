import achernarImg from "../assets/achernar.png";
import todoImg from "../assets/to-do-list.png";
import pixelAdventureImg from "../assets/pixel-adventure.png";
import goldenDragonImg from "../assets/Golden_Dragon.png";
import crowImg from "../assets/Crow.png";
import quizAviationImg from "../assets/aviation.png";
import hockeyQuebecImg from "../assets/Hockey_Quebec.png";
import astroDashImg from "../assets/Astro_Dash.png";
import airImg from "../assets/air.png";

import afterEffectsImg from "../assets/Icons/adobe-after-effects.png";

const projects = [
  {
      title: "Achernar",
      description: "A 3D adventure game created in Unity as a team of four over four months. The project involved designing characters, environments, and gameplay mechanics, while also learning to collaborate effectively with version control tools like GitHub. My contributions included programming, asset integration, and project management.",
      inDepthDescription : "3D Adventure Game (Unity) — Team Project (4 months) \n We developed a fully 3D adventure game in Unity as part of a four-person team composed of me (programming & asset integration), Guillaume Ducharme-Vanier (level design), Maëlle Léger (3D art), and Olivier Poulin (project lead & sound design). \n The project involved creating the game’s world, characters, mechanics, and overall player experience from the ground up. My responsibilities included programming core gameplay systems in C#, integrating 3D models, textures, animations, and audio into Unity, and helping coordinate development tasks through GitHub and Trello. I also contributed to technical problem-solving, iterative prototyping, and ensuring smooth collaboration through version control and structured workflows.",
      icon: [afterEffectsImg],
      tech: ["Unity 3D", "Maya", "Github"],
      link: "https://alexrkv11.itch.io/projet-achernar",
      image: achernarImg,
    },
    {
      title: "To-do list",
      description: "A React-based web application designed with a to-do list style interface. The project was a way to learn React while managing states in this programming language. It allowed me and my classmate Gabrielle to experiment with modern front-end workflows and create a clean, minimal user experience.",
      inDepthDescription : "",
      tech: ["React", "VS Code", "Illustrator"],
      link: "https://2259198.github.io/Website-To-Do/",
      image: todoImg,
    },
    {
      title: "Quiz Aviation",
      description: "An interactive web quiz built using JavaScript, designed to test users' knowledge of aviation. This project allowed me to practice DOM manipulation, and creating an engaging experience through front-end coding. It was the first time we learned to code with different screen sizes. If you're a fan of aviation, try it.",
      inDepthDescription : "",
      tech: ["HTML 5", "CSS 3", "JavaScript"],
      link: "https://2259198.github.io/Quiz-Aviation/",
      image: quizAviationImg,
    },
    {
      title: "Pixel Adventure",
      description: "A 2D Unity game developed as a personal summer project, where I learned pixel art and created all of the visual assets myself. The game challenged me to design mechanics such as a game manager and basic interactions. It was a game I made in five to six months.",
      inDepthDescription : "",
      tech: ["Unity 2D", "Piskel", "After Effects"],
      link: "https://alexrkv11.itch.io/pixel-adventure",
      image: pixelAdventureImg,
    },
    {
      title: "Hockey Québec",
      description: "A collection of promotional and informational videos created during my internship at Hockey Québec. I worked with After Effects and Illustrator to design animations, edit footage, and ensure that all visuals followed the organization’s branding guidelines.",
      inDepthDescription : "",
      tech: ["After Effects", "Illustrator"],
      link: "https://www.youtube.com/playlist?list=PLVJ9ECOMr_AOgGoC_Jxvu4xcV_a0DsJQS",
      image: hockeyQuebecImg
    },
    {
      title: "Redesign 'Crow'",
      description: "A complete redesign of the Centre d'entraînement Crow website. The focus of this project was on improving user experience, and updating the visual identity. I worked with HTML, CSS, and Adobe XD to prototype the new layout with my classmate Minji Ardanuy-Jetté.",
      inDepthDescription : "",
      tech: ["HTML 5", "CSS 3", "Adobe XD"],
      link: "https://2259198.github.io/Refonte-Centre-Entrainement-Crow/",
      image: crowImg,
    },
    {
      title: "Golden Dragon",
      description: "A short cinematic video project inspired by a fictitious crime movie scenario. Produced and edited with Premiere Pro, the project gave me the opportunity to explore storytelling through film editing, and atmosphere creation. The project was made in teams of four.",
      inDepthDescription : "",
      tech: ["Premiere Pro"],
      link: "https://www.youtube.com/watch?v=PUPltwrqhIw",
      image: goldenDragonImg,
    },
    {
      title: "Astro Dash",
      description: "A solo project developed in Unity, Astro Dash is a 3D arcade game I created in my free time. I handled every aspect of development, from concept to asset design to coding gameplay mechanics. The project reflects my passion for creating fun and replayable gaming experiences.",
      inDepthDescription : "",
      tech: ["Unity 3D", "Illustrator"],
      link: "https://alexrkv11.itch.io/astro-dash",
      image: astroDashImg
    },
    {
      title: "AIR",
      description: "A graphic design project created for Earth Day, focusing on raising environmental awareness. Using Illustrator, I designed visuals that highlight the importance of clean air and sustainability, which were later featured on the Cégep Maisonneuve website.",
      inDepthDescription : "",
      tech: ["Illustrator"],
      link: "https://www.cmaisonneuve.qc.ca/environnement/jour-de-la-terre/#Air",
      image: airImg
    }
]

export default projects