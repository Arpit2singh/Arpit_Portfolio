import React from 'react'
import { createContext } from 'react';

export const Universalcontext = createContext() ;



export const UniversalData = [
  {
    "id": 1,
    "img": "/UniBridge.png",
    "text": "UniBridge — AI powered student networking with chatbot, smart reminders, 2FA & email notifications.",
    "mainBtn": "Live Demo",
    "links": {
      "live": "https://uni-bridge-frontend.vercel.app/register.html",
      "github": "https://github.com/Arpit2singh"
    }
  },
  {
    "id": 2,
    "img": "/Expenser.png",
    "text": "Expenser — Expense tracking backend system with user authentication and MongoDB queries.",
    "mainBtn": "Source Code",
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/ExpenseTracker"
    }
  },
  {
    "id": 3,
    "img": "/Music.png",
    "text": "Music UI — Modern React Music player UI with clean animations and responsive layout.",
    "mainBtn": "Live Demo",
    "links": {
      "live": "https://muics-music-ui.vercel.app/",
      "github": "https://github.com/Arpit2singh"
    }
  },
  {
    "id": 4,
    "img": "/LostandFound.png",
    "text": "Lost & Found — Web app where users can report and find lost items in campus.",
    "mainBtn": "Source Code",
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/Lost-found"
    }
  },
  {
    "id": 5,
    "img": "/Echovit.png",
    "text": "EchoVIT — UI/UX inspired project with responsive layouts and visually appealing components.",
    "mainBtn": "Source Code",
    "links": {
      "live": "",
      "github": "https://github.com/Arpit2singh/echovit"
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