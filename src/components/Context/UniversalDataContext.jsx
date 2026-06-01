import React from 'react'
import { createContext } from 'react';

export const Universalcontext = createContext() ;

export const UniversalData = [
  {
    "id": 1,
    "img": "/UniBridge.png",
    "text": "UniBridge — AI-powered student networking platform with Google Agentic AI, smart reminders, automated chatbot, 2FA, and real-time alerts.",
    "mainBtn": "Live Demo",
    "category": ["Fullstack", "AI"],
    "tech": ["Java", "Node.js", "Express.js", "MongoDB", "Google Agentic AI"],
    "links": {
      "live": "https://uni-bridge-frontend.vercel.app/register.html",
      "github": "https://github.com/Arpit2singh"
    }
  },
  {
    "id": 2,
    "img": "/Expenser.png",
    "text": "Expenser — Full-stack expense tracking system with secure JWT-based authentication, role-based access, and optimized MongoDB schemas.",
    "mainBtn": "Source Code",
    "category": ["Backend"],
    "tech": ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/ExpenseTracker"
    }
  },
  {
    "id": 3,
    "img": "/LoraFrame.png",
    "text": "LoraFrame — GenAI pipeline chaining Grok Vision API, custom prompt builder, and Google Imagen API with Redis caching. HackCulture Hackathon Grand Finalist.",
    "mainBtn": "Source Code",
    "category": ["Fullstack", "AI"],
    "tech": ["React", "ComfyUI", "Grok Vision API", "Google Imagen API", "Redis"],
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/LoraFrame-Final"
    }
  },
  {
    "id": 4,
    "img": "/Music.png",
    "text": "Music UI — Interactive, highly responsive music player user interface featuring modern layouts and clean animations.",
    "mainBtn": "Live Demo",
    "category": ["Frontend"],
    "tech": ["ReactJS", "Tailwind CSS", "HTML5", "CSS3"],
    "links": {
      "live": "https://muics-music-ui.vercel.app/",
      "github": "https://github.com/Arpit2singh"
    }
  },
  {
    "id": 5,
    "img": "/LostandFound.png",
    "text": "Lost & Found — MERN stack web application for reporting and recovering lost items inside campus networks.",
    "mainBtn": "Source Code",
    "category": ["Fullstack"],
    "tech": ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/Lost-found"
    }
  },
  {
    "id": 6,
    "img": "/Echovit.png",
    "text": "EchoVIT — Full-stack platform with responsive UI, integrated backend APIs, and MongoDB for dynamic content management.",
    "mainBtn": "Source Code",
    "category": ["Frontend"],
    "tech": ["ReactJS", "Tailwind CSS", "Node.js", "MongoDB"],
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/echovit"
    }
  },
  {
    "id": 7,
    "img": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
    "text": "Smart Email Tracker — Lightweight email analytics tool that embeds a 1x1 transparent tracking pixel inside sent emails to track and log exactly when they are opened by the receiver.",
    "mainBtn": "Live Demo",
    "category": ["Frontend", "Backend"],
    "tech": ["ReactJS", "Tailwind CSS", "Vite", "Tracking Pixel"],
    "links": {
      "live": "https://smart-email-frontend-eight.vercel.app/",
      "github": "https://github.com/Arpit2singh"
    }
  }
];

const UniversalDataContext = (props) => {
  return (
    <Universalcontext.Provider value={UniversalData} >
    {props.children}
    </Universalcontext.Provider>
  )
}

export default UniversalDataContext