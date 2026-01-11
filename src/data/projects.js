import achernarImg from "../assets/Projects/Achernar_Logo.png";
import todoImg from "../assets/Projects/To_Do_List_Icon.png";
import pixelAdventureImg from "../assets/Projects/Pixel_Adventure_Logo.png";
import goldenDragonImg from "../assets/Projects/GoldenDragonLogo.png";
import crowImg from "../assets/Projects/Crow_Icon.jpg";
import quizAviationImg from "../assets/Projects/Aviation_Quiz_Icon.png";
import hockeyQuebecImg from "../assets/Projects/Hockey_Quebec.avif";
import astroDashImg from "../assets/Projects/Astro_Dash_Logo.png";

import achernarImgDetail from "../assets/ProjectsPhotos/achernar.png";
import achernarImg2 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Laboratory.png";
import achernarImg3 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Letter.png";
import achernarImg4 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Level_1.png";
import achernarImg5 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Level_3.png";
import achernarImg6 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Main_Menu.png";
import achernarImg7 from "../assets/ProjectsPhotosExtra/Achernar/Achernar_Tutorial.png";

import astroDashImg1 from "../assets/ProjectsPhotosExtra/AstroDash/Instructions.png";
import astroDashImg2 from "../assets/ProjectsPhotosExtra/AstroDash/Ship.png";

import aviationImg1 from "../assets/ProjectsPhotosExtra/Aviation/Aviation_Quiz_1.png";
import aviationImg2 from "../assets/ProjectsPhotosExtra/Aviation/Aviation_Quiz_2.png";
import aviationImg3 from "../assets/ProjectsPhotosExtra/Aviation/Aviation_Quiz_3.png";

import calculatorMainImg from "../assets/Icons/CalculatorAppIcon.png";
import calculatorImg1 from "../assets/ProjectsPhotosExtra/Calculator/CalculatorApp1.png";
import calculatorImg2 from "../assets/ProjectsPhotosExtra/Calculator/CalculatorApp2.png";

import crowImg1 from "../assets/ProjectsPhotosExtra/Crow/Crow_1.jpg";
import crowImg2 from "../assets/ProjectsPhotosExtra/Crow/Crow_2.jpg";

import goldenDragonImg1 from "../assets/ProjectsPhotosExtra/Golden Dragon/Golden_Dragon_1.png";
import goldenDragonImg2 from "../assets/ProjectsPhotosExtra/Golden Dragon/Golden_Dragon_2.png";
import goldenDragonImg3 from "../assets/ProjectsPhotosExtra/Golden Dragon/Golden_Dragon_3.png";
import goldenDragonImg4 from "../assets/ProjectsPhotosExtra/Golden Dragon/Golden_Dragon_4.png";

import hockeyQuebecImg2 from "../assets/ProjectsPhotosExtra/HockeyQuebec/Hockey_Quebec_2.png";
import hockeyQuebecImg3 from "../assets/ProjectsPhotosExtra/HockeyQuebec/Hockey_Quebec_3.png";
import hockeyQuebecImg4 from "../assets/ProjectsPhotosExtra/HockeyQuebec/Hockey_Quebec_4.png";

import todoListImg from "../assets/ProjectsPhotosExtra/To_Do_List/to_do_list.png";

import pixelAdventureImg1 from "../assets/ProjectsPhotosExtra/PixelAdventure/First_Level.png";
import pixelAdventureImg2 from "../assets/ProjectsPhotosExtra/PixelAdventure/Fourth_Level.png";
import pixelAdventureImg3 from "../assets/ProjectsPhotosExtra/PixelAdventure/Third_Level.png";
import pixelAdventureImg4 from "../assets/ProjectsPhotosExtra/PixelAdventure/Shop.png";

import aviationImgDetail from "../assets/ProjectsPhotos/aviation.png";
import crowImgDetail from "../assets/ProjectsPhotos/Crow.png";
import hockeyQuebecImgDetail from "../assets/ProjectsPhotos/Hockey_Quebec.png";
import toDoListImgDetail from "../assets/ProjectsPhotos/to-do-list.png";

import escapeTheLabyrinthLogo from "../assets/Icons/EscapeTheLabyrinthLogo.png";
import escapeTheLabyrinthImg1 from "../assets/ProjectsPhotosExtra/EscapeTheLabyrinth/EscapeTheLabyrinth1.png";
import escapeTheLabyrinthImg2 from "../assets/ProjectsPhotosExtra/EscapeTheLabyrinth/EscapeTheLabyrinth2.png";
import escapeTheLabyrinthImg3 from "../assets/ProjectsPhotosExtra/EscapeTheLabyrinth/EscapeTheLabyrinth3.png";
import escapeTheLabyrinthImg4 from "../assets/ProjectsPhotosExtra/EscapeTheLabyrinth/EscapeTheLabyrinth4.png";
import escapeTheLabyrinthImgBanner from "../assets/ProjectsPhotosExtra/EscapeTheLabyrinth/EscapeTheLabyrinthBanner.png";


const projects = [

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
  {
    title: "Escape the Labyrinth",
    description: "A first-person adventure and survival game developed in Unreal Engine as my end-of-semester project at Collège de Maisonneuve.",
    inDepthDescription: "Escape The Labyrinth — End-of-Semester Project (Unreal Engine) \n Escape The Labyrinth is a first-person adventure and survival game developed in Unreal Engine as my final project at Collège de Maisonneuve. The game places the player inside a dark and mysterious labyrinth where survival depends on exploration, quick reflexes and smart decision-making. Players must navigate through an immersive maze filled with dynamic obstacles such as deadly spikes, swinging blades, moving platforms and other environmental hazards. A countdown timer adds constant pressure, pushing players to move efficiently and think strategically in order to find the exit before time runs out.",
    finishedDate: new Date(2025, 1, 24),
    icon: ["unity", "github"],
    link: "https://alexrkv11.itch.io/escape-the-labyrinth",
    image: escapeTheLabyrinthLogo,
    projectDetailImage: [

      escapeTheLabyrinthImgBanner,
      escapeTheLabyrinthImg1,
      escapeTheLabyrinthImg2,
      escapeTheLabyrinthImg3,
      escapeTheLabyrinthImg4

    ]
  },
  {
    title: "Calculator App",
    description: "A simple calculator app built in Java to perform basic arithmetic operations.",
    inDepthDescription: "A personal Java project where I created a fully functional calculator app. This project helped me strengthen my understanding of Java fundamentals, including object-oriented programming, event handling and GUI design. The app allows users to perform addition, subtraction, multiplication, division and more operations. It demonstrates an user-friendly interface design.",
    finishedDate: new Date(2026, 0, 9),
    icon: ["java"],
    isDownload: true,
    downloadFile: import.meta.env.BASE_URL + "downloads/Calculator.zip",
    image: calculatorMainImg,
    projectDetailImage: [

      calculatorImg1,
      calculatorImg2

    ]
  },
  {
    title: "Achernar",
    description: "A 3D adventure game built in Unity as part of a four-person team.",
    inDepthDescription: "3D Adventure Game (Unity) — Team Project (4 months) \n We developed a fully 3D adventure game in Unity as part of a four-person team composed of me (programming & asset integration), Guillaume Ducharme-Vanier (level design), Maëlle Léger (3D art), and Olivier Poulin (project lead & sound design). \n The project involved creating the game’s world, characters, mechanics, and overall player experience from the ground up. My responsibilities included programming core gameplay systems in C#, integrating 3D models, textures, animations, and audio into Unity, and helping coordinate development tasks through GitHub and Trello. I also contributed to technical problem-solving, iterative prototyping, and ensuring smooth collaboration through version control and structured workflows.",
    finishedDate: new Date(2024, 4, 19),
    icon: ["unity"],
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
    title: "Checklist",
    description: "A React-based to-do list web application to manage tasks efficiently.",
    inDepthDescription: "React Web Application — To-Do List Interface (Team Project) \n Built a React-based web application featuring a clean, minimal to-do list interface. Developed as a learning project to explore React fundamentals, component-based architecture, and state management. Collaborated with classmate Gabrielle to experiment with modern front-end workflows, improve UI/UX design, and gain hands-on experience with responsive layout, reusable components, and interactive user input handling.",
    finishedDate: new Date(2024, 5, 5),
    icon: ["react"],
    link: "https://2259198.github.io/Website-To-Do/",
    image: todoImg,
    projectDetailImage: [
      toDoListImgDetail,
      todoListImg
    ]
  },
  {
    title: "Aviation - Quiz",
    description: "An interactive JavaScript web quiz to test aviation knowledge.",
    inDepthDescription: "Interactive Aviation Quiz — JavaScript Web Project \n Created an interactive web quiz using JavaScript to test users’ knowledge of aviation. The project focused on practicing DOM manipulation, dynamic content updates, and front-end interactivity. It was also my first experience designing for multiple screen sizes, introducing responsive layout techniques. The result was a simple yet engaging quiz experience—perfect for aviation enthusiasts.",
    finishedDate: new Date(2023, 4, 20),
    icon: ["html", "css", "js"],
    link: "https://2259198.github.io/Quiz-Aviation/",
    image: quizAviationImg,
    projectDetailImage: [
      aviationImg1,
      aviationImg2,
      aviationImg3
    ]
  },
  {
    title: "Pixel Adventure",
    description: "A 2D Unity game with custom pixel art and core gameplay mechanics.",
    inDepthDescription: "2D Unity Game — Personal Project (5–6 months) \n Developed a 2D game in Unity as a personal summer project, creating all pixel art and visual assets independently. Designed and implemented core gameplay mechanics, including a game manager and basic player interactions. The project allowed me to deepen my skills in Unity development, game design, and asset creation while managing the full development process from start to finish.",
    finishedDate: new Date(2024, 7, 9),
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
    title: "Hockey Québec - Internship",
    description: "Promotional and informational videos created during a professional internship.",
    inDepthDescription: "Promotional and Informational Videos — Internship at Hockey Québec \n Produced a series of promotional and informational videos during my internship, using After Effects and Illustrator to create animations, edit footage, and design visual elements. Ensured all content adhered to Hockey Québec’s branding guidelines, enhancing the organization’s digital presence and communication materials.",
    finishedDate: new Date(2025, 4, 9),
    icon: ["video"],
    link: "https://www.youtube.com/watch?v=2cUpMW7ARbI",
    image: hockeyQuebecImg,
    projectDetailImage: [
      hockeyQuebecImg2,
      hockeyQuebecImg3,
      hockeyQuebecImg4
    ]
  },
  {
    title: "Crow - Redesign",
    description: "A complete website redesign improving UX and visual identity for Centre d’entraînement Crow.",
    inDepthDescription: "Website Redesign — Centre d'entraînement Crow (Team Project) \n Led a full redesign of the Centre d'entraînement Crow website with Minji Ardanuy-Jetté, focusing on improving user experience and modernizing the visual identity. Developed prototypes and layouts in Adobe XD and implemented the new design using HTML and CSS, ensuring a clean, intuitive, and responsive interface.",
    finishedDate: new Date(2023, 11, 12),
    icon: ["html", "css", "js"],
    link: "https://2259198.github.io/Refonte-Centre-Entrainement-Crow/",
    image: crowImg,
    projectDetailImage: [
      crowImgDetail,
      crowImg1,
      crowImg2
    ]
  },
  {
    title: "Golden Dragon",
    description: "A short cinematic video project exploring storytelling and film editing.",
    inDepthDescription: "Cinematic Short Film — Team Project \n Produced and edited a short cinematic video inspired by a fictitious crime movie scenario as part of a four-person team. Used Premiere Pro to craft the narrative, design pacing, and create atmospheric tension. The project provided hands-on experience in storytelling through film editing, shot composition, and collaborative video production.",
    finishedDate: new Date(2022, 11, 13),
    icon: ["video"],
    link: "https://www.youtube.com/watch?v=PUPltwrqhIw",
    image: goldenDragonImg,
    projectDetailImage: [
      goldenDragonImg1,
      goldenDragonImg2,
      goldenDragonImg3,
      goldenDragonImg4
    ]
  },
  {
    title: "Astro Dash",
    description: "A solo-developed 3D arcade game in Unity featuring custom gameplay and assets.",
    inDepthDescription: "Astro Dash — Personal 3D Arcade Game (Unity) \n Developed a 3D arcade game entirely independently in Unity, managing all aspects of development from concept and asset creation to coding gameplay mechanics. Designed engaging and replayable experiences, demonstrating skills in game design, programming, 3D asset integration, and full project ownership.",
    finishedDate: new Date(2024, 3, 27),
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