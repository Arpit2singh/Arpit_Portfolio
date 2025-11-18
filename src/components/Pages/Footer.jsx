import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] bg-transparent text-white py-10 px-6 flex flex-col justify-center items-center gap-6 mt-10">
      
      {/* Footer Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500
        bg-clip-text text-transparent transition-all duration-500
        hover:opacity-90 cursor-pointer">
        Let's Connect & Build Something Cool ✨
      </h2>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/Arpit2singh"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex justify-center items-center rounded-full 
          bg-gradient-to-br from-red-400 via-purple-500 to-yellow-400 
          hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Github size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/arpitsinghno1"
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 w-12 flex justify-center items-center rounded-full 
          bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 
          hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="mailto:arpitlibono57@gmail.com"
          className="h-12 w-12 flex justify-center items-center rounded-full 
          bg-gradient-to-br from-purple-500 via-yellow-400 to-red-500 
          hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <Mail size={22} />
        </a>
      </div>

      {/* Bottom */}
      <p className="text-gray-300 text-sm md:text-base">
        © {new Date().getFullYear()} Arpit Singh — Designed & Built by Me 🚀
      </p>
    </footer>
  );
};

export default Footer;
