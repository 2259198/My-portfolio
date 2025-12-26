import achernarImg from "../assets/Projects/Achernar_Logo.png";
import todoImg from "../assets/Projects/To_Do_List_Icon.jpg";
import pixelAdventureImg from "../assets/Projects/Pixel_Adventure_Logo.png";
import goldenDragonImg from "../assets/Projects/Golden_Dragon.png";
import crowImg from "../assets/Projects/Crow_Icon.jpg";
import quizAviationImg from "../assets/Projects/Aviation_Quiz_Icon.jpg";
import hockeyQuebecImg from "../assets/Projects/Hockey_Quebec.avif";
import astroDashImg from "../assets/Projects/Astro_Dash_Logo.png";

import achernarImgDetail from "../assets/ProjectsPhotos/achernar.png";
import achernarImg2 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Laboratory.png";
import achernarImg3 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Letter.png";
import achernarImg4 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Level_1.png";
import achernarImg5 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Level_3.png";
import achernarImg6 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Main_Menu.png";
import achernarImg7 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Tutorial.png";

import todoListImg from "../assets/ProjectsPhotosExtra/To_Do_List/to_do_list.png";

import pixelAdventureImg1 from "../assets/ProjectsPhotosExtra/PixelAdventure/First_Level.png";
import pixelAdventureImg2 from "../assets/ProjectsPhotosExtra/PixelAdventure/Fourth_Level.png";
import pixelAdventureImg3 from "../assets/ProjectsPhotosExtra/PixelAdventure/Third_Level.png";
import pixelAdventureImg4 from "../assets/ProjectsPhotosExtra/PixelAdventure/Shop.png";

import astroDashImg1 from "../assets/ProjectsPhotosExtra/AstroDash/Instructions.png";
import astroDashImg2 from "../assets/ProjectsPhotosExtra/AstroDash/Ship.png";

import aviationImgDetail from "../assets/ProjectsPhotos/aviation.png";
import crowImgDetail from "../assets/ProjectsPhotos/Crow.png";
import hockeyQuebecImgDetail from "../assets/ProjectsPhotos/Hockey_Quebec.png";
import toDoListImgDetail from "../assets/ProjectsPhotos/to-do-list.png";

const projects = [

  // {
  //   title: "Calculator App",
  //   description: "A calculator App made in Java",
  //   inDepthDescription: "Done in a later stage",
  //   icon: ["java", "github"],
  //   link: "https://alexrkv11.itch.io/projet-achernar",
  //   image: achernarImg,
  // projectDetailImage: [

  //     achernarImgDetail,
  //     achernarImg,
  //     achernarImg2,
  //     achernarImg3,
  //     achernarImg4,
  //     achernarImg5,
  //     achernarImg6,
  //     achernarImg7,

  //   ]
  // },
  // {
  //   title: "Bank of Rankov",
  //   description: "A Java bank app made after learning the basics of Java",
  //   inDepthDescription: "Done in a later stage",
  //   icon: ["java", "github"],
  //   link: "",
  //   image: achernarImg,
  // projectDetailImage: [

  //     achernarImgDetail,
  //     achernarImg,
  //     achernarImg2,
  //     achernarImg3,
  //     achernarImg4,
  //     achernarImg5,
  //     achernarImg6,
  //     achernarImg7,

  //   ]
  // },
  // {
  //   title: "Escape the Labyrinth",
  //   description: "My end of the year project for my last project in College de Maisonneuve",
  //   inDepthDescription: "Done in a later stage",
  //   finishedDate: new Date(2025, 2, 24),
  //   icon: ["unity", "github"],
  //   link: "",
  //   image: achernarImg,
  //   projectDetailImage: [

  //     achernarImgDetail,
  //     achernarImg,
  //     achernarImg2,
  //     achernarImg3,
  //     achernarImg4,
  //     achernarImg5,
  //     achernarImg6,
  //     achernarImg7,

  //   ]
  // },
  {
    title: "Achernar",
    description: "A 3D adventure game created in Unity as a team of four over four months. The project involved designing characters, environments, and gameplay mechanics, while also learning to collaborate effectively with version control tools like GitHub. My contributions included programming, asset integration, and project management.",
    inDepthDescription: "3D Adventure Game (Unity) — Team Project (4 months) \n We developed a fully 3D adventure game in Unity as part of a four-person team composed of me (programming & asset integration), Guillaume Ducharme-Vanier (level design), Maëlle Léger (3D art), and Olivier Poulin (project lead & sound design). \n The project involved creating the game’s world, characters, mechanics, and overall player experience from the ground up. My responsibilities included programming core gameplay systems in C#, integrating 3D models, textures, animations, and audio into Unity, and helping coordinate development tasks through GitHub and Trello. I also contributed to technical problem-solving, iterative prototyping, and ensuring smooth collaboration through version control and structured workflows.",
    // finishedDate: new Date(2024, 4, 27),
    icon: ["unity", "github"],
    link: "https://alexrkv11.itch.io/projet-achernar",
    image: achernarImg,
    projectDetailImage: [

      achernarImgDetail,
      achernarImg,
      achernarImg2,
      achernarImg3,
      achernarImg4,
      achernarImg5,
      achernarImg6,
      achernarImg7,

    ]
  },
  {
    title: "To-do list",
    description: "A React-based web application designed with a to-do list style interface. The project was a way to learn React while managing states in this programming language. It allowed me and my classmate Gabrielle to experiment with modern front-end workflows and create a clean, minimal user experience.",
    inDepthDescription: "React Web Application — To-Do List Interface (Team Project) \n Built a React-based web application featuring a clean, minimal to-do list interface. Developed as a learning project to explore React fundamentals, component-based architecture, and state management. Collaborated with classmate Gabrielle to experiment with modern front-end workflows, improve UI/UX design, and gain hands-on experience with responsive layout, reusable components, and interactive user input handling.",
    // finishedDate: new Date(2024, 6, 5),
    icon: ["react"],
    link: "https://2259198.github.io/Website-To-Do/",
    image: todoImg,
    projectDetailImage: [
      toDoListImgDetail,
      todoListImg
    ]
  },
  {
    title: "Quiz Aviation",
    description: "An interactive web quiz built using JavaScript, designed to test users' knowledge of aviation. This project allowed me to practice DOM manipulation, and creating an engaging experience through front-end coding. It was the first time we learned to code with different screen sizes. If you're a fan of aviation, try it.",
    inDepthDescription: "Interactive Aviation Quiz — JavaScript Web Project \n Created an interactive web quiz using JavaScript to test users’ knowledge of aviation. The project focused on practicing DOM manipulation, dynamic content updates, and front-end interactivity. It was also my first experience designing for multiple screen sizes, introducing responsive layout techniques. The result was a simple yet engaging quiz experience—perfect for aviation enthusiasts.",
    // finishedDate: new Date(2023, 5, 20),
    icon: ["html", "css", "js"],
    link: "https://2259198.github.io/Quiz-Aviation/",
    image: quizAviationImg,
    projectDetailImage: [
      aviationImgDetail
    ]
  },
  {
    title: "Pixel Adventure",
    description: "A 2D Unity game developed as a personal summer project, where I learned pixel art and created all of the visual assets myself. The game challenged me to design mechanics such as a game manager and basic interactions. It was a game I made in five to six months.",
    inDepthDescription: "2D Unity Game — Personal Project (5–6 months) \n Developed a 2D game in Unity as a personal summer project, creating all pixel art and visual assets independently. Designed and implemented core gameplay mechanics, including a game manager and basic player interactions. The project allowed me to deepen my skills in Unity development, game design, and asset creation while managing the full development process from start to finish.",
    // finishedDate: new Date(2024, 8, 9),
    icon: ["unity"],
    link: "https://alexrkv11.itch.io/pixel-adventure",
    image: pixelAdventureImg,
    projectDetailImage: [
      pixelAdventureImg1,
      pixelAdventureImg2,
      pixelAdventureImg3,
      pixelAdventureImg4,
    ]
  },
  {
    title: "Hockey Québec",
    description: "A collection of promotional and informational videos created during my internship at Hockey Québec. I worked with After Effects and Illustrator to design animations, edit footage, and ensure that all visuals followed the organization’s branding guidelines.",
    inDepthDescription: "Promotional and Informational Videos — Internship at Hockey Québec \n Produced a series of promotional and informational videos during my internship, using After Effects and Illustrator to create animations, edit footage, and design visual elements. Ensured all content adhered to Hockey Québec’s branding guidelines, enhancing the organization’s digital presence and communication materials.",
    // finishedDate: new Date(2025, 5, 9),
    icon: ["video"],
    link: "https://www.youtube.com/playlist?list=PLVJ9ECOMr_AOgGoC_Jxvu4xcV_a0DsJQS",
    image: hockeyQuebecImg,
    projectDetailImage: [
      hockeyQuebecImgDetail
    ]
  },
  {
    title: "Redesign 'Crow'",
    description: "A complete redesign of the Centre d'entraînement Crow website. The focus of this project was on improving user experience, and updating the visual identity. I worked with HTML, CSS, and Adobe XD to prototype the new layout with my classmate Minji Ardanuy-Jetté.",
    inDepthDescription: "Website Redesign — Centre d'entraînement Crow (Team Project) \n Led a full redesign of the Centre d'entraînement Crow website with Minji Ardanuy-Jetté, focusing on improving user experience and modernizing the visual identity. Developed prototypes and layouts in Adobe XD, and implemented the new design using HTML and CSS, ensuring a clean, intuitive, and responsive interface.",
    // finishedDate: new Date(2023, 12, 12),
    icon: ["html", "css", "js"],
    link: "https://2259198.github.io/Refonte-Centre-Entrainement-Crow/",
    image: crowImg,
    projectDetailImage: [
      crowImgDetail
    ]
  },
  {
    title: "Golden Dragon",
    description: "A short cinematic video project inspired by a fictitious crime movie scenario. Produced and edited with Premiere Pro, the project gave me the opportunity to explore storytelling through film editing, and atmosphere creation. The project was made in teams of four.",
    inDepthDescription: "Cinematic Short Film — Team Project \n Produced and edited a short cinematic video inspired by a fictitious crime movie scenario as part of a four-person team. Used Premiere Pro to craft the narrative, design pacing, and create atmospheric tension. The project provided hands-on experience in storytelling through film editing, shot composition, and collaborative video production.",
    // finishedDate: new Date(2022, 12, 13),
    icon: ["video"],
    link: "https://www.youtube.com/watch?v=PUPltwrqhIw",
    image: goldenDragonImg,
    projectDetailImage: [
      goldenDragonImg
    ]
  },
  {
    title: "Astro Dash",
    description: "A solo project developed in Unity, Astro Dash is a 3D arcade game I created in my free time. I handled every aspect of development, from concept to asset design to coding gameplay mechanics. The project reflects my passion for creating fun and replayable gaming experiences.",
    inDepthDescription: "Astro Dash — Personal 3D Arcade Game (Unity) \n Developed a 3D arcade game entirely independently in Unity, managing all aspects of development from concept and asset creation to coding gameplay mechanics. Designed engaging and replayable experiences, demonstrating skills in game design, programming, 3D asset integration, and full project ownership.",
    // finishedDate: new Date(2024, 4, 27),
    icon: ["unity"],
    link: "https://alexrkv11.itch.io/astro-dash",
    image: astroDashImg,
    projectDetailImage: [
      astroDashImg1,
      astroDashImg2
    ]
  },
].sort((a, b) => a.title.localeCompare(b.title))

export default projects