import { Database } from "lucide-react";

export const PROJECTS = [
  {
      title: "Profile Management API",
      category: "Backend Development",
      description: "A robust RESTful API built to handle user profile data. It features full CRUD functionality, including automated ID generation, data validation, and error handling for profile updates and deletions.",
      tags: ["Node.js", "Express.js", "Rest API", "JSON Database"],
      image: "/api-background.jpg",
      links: {
          demo: "https://example.com",
          github: "https://github.com/Rglhnoj/Activity-CRUD",
      },
  },
  {
      title: "Personal Profile Card",
      category: "UI Design / Frontend Development",
      description: "A clean, dark-themed personal information component featuring a custom header design and responsive profile badges.",
      tags: ["React", "CSS",],
      image: "/profile-project.png",
      links: {
          demo: "https://johnrigel-profilecard.vercel.app",
          github: "https://github.com/Rglhnoj/activity1-appsdev-profile",
      },
  },
  {
      title: "Secure Auth System",
      category: "Backend Development",
      description: "A professional-grade authentication system featuring secure password hashing with Bcrypt, JWT (JSON Web Token) generation, and HTTP-only cookie implementation. It includes comprehensive validation and error handling for user registration and login flows.",
      tags: ["Node.js", "Express", "JWT", "Bcrypt", "Cookies"],
      image: "/api-background.jpg",
      links: {
          demo: "https://example.com",
          github: "https://github.com/Rglhnoj/Activity2-IM2",
      },
  },
  {
      title: "Dynamic Product Showcase",
      category: "Frontend Development",
      description: "A responsive e-commerce gallery built with React. This project demonstrates clean component architecture by mapping complex data arrays into reusable ProductCard components, featuring structured props handling for images, pricing, and descriptions.",
      tags: ["React", "JavaScript", "Props", "CSS Flexbox"],
      image: "/product-card.png",
      links: {
          demo: "https://example.com",
          github: "https://github.com/Rglhnoj/AppsDev-ProductCard",
      },
  },
];
