import React, { useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useAnimate, useInView, motion } from "framer-motion";

const Footer = () => {
  // FIX 1: SCOPE pehle define karo (Nahi to code crash karega)
  const [scope, animate] = useAnimate();
  
  // FIX 2: Ab SCOPE ko use karo check karne ke liye ki user ne scroll kiya ya nahi
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const sequence = [
        // STEP 1: STRIKE (Takkar)
        // Text left se aayega (-100 -> 0)
        ["#box1", { x: [-100, 0], opacity: [0, 1] }, { duration: 0.8, ease: "backOut" }],
        
        // Star right se aayega (100 -> 0) aur Text ke saath takrayega
        ["#box2", { x: [100, 0], opacity: [0, 1] }, { duration: 0.8, ease: "backOut", at: "<" }],

        // STEP 2: THE CURVE (U-Turn Loop)
        ["#box2", 
          {
            // X Left jayega fir wapas Center aayega
            x: [0, -60, -120, 0], 
            // Y Upar jayega fir wapas Niche aayega (Arc banega)
            y: [0, -60, 20, 0], 
            // Saath mein ghoomega
            rotate: [0, -180, -360]
          }, 
          { duration: 1.5, ease: "easeInOut" }
        ],

        // STEP 3: FINAL POP (Star chamkega)
        ["#box2", { scale: [1, 1.5, 1] }, { duration: 0.4 }]
      ];
      
      animate(sequence);
    }
  }, [isInView, animate]);

  return (
    <footer ref={scope} className="w-full h-[400px] bg-transparent text-white py-10 px-6 flex flex-col justify-center items-center gap-6 mt-10">
      
      {/* Footer Title */}
      <h2 className="text-3xl md:text-5xl font-extrabold flex items-center justify-center gap-2 flex-wrap
        bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500
        bg-clip-text text-transparent transition-all duration-500
        hover:opacity-90 cursor-pointer">
        
        {/* FIX 3: 'inline-block' zaroori hai animation ke liye. 'opacity-0' blinking rokega. */}
        <motion.span id="box1" className="inline-block opacity-0"> 
          Let's Connect & Build Something Cool
        </motion.span>
        
        <motion.span id="box2" className="inline-block opacity-0   bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-400 to-purple-500 "> 
           ✨
        </motion.span>
  
      </h2>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <a href="https://github.com/Arpit2singh" target="_blank" rel="noopener noreferrer"
          className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-br from-red-400 via-purple-500 to-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg">
          <Github size={22} color="white" />
        </a>

        <a href="https://www.linkedin.com/in/arpitsinghno1" target="_blank" rel="noopener noreferrer"
          className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 hover:scale-110 transition-all duration-300 shadow-lg">
          <Linkedin size={22} color="white" />
        </a>

        <a href="mailto:arpitlibono57@gmail.com"
          className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-br from-purple-500 via-yellow-400 to-red-500 hover:scale-110 transition-all duration-300 shadow-lg">
          <Mail size={22} color="white" />
        </a>
      </div>

      <p className="text-gray-300 text-sm md:text-base">
        © {new Date().getFullYear()} Arpit Singh — Designed & Built by Me 🚀
      </p>
    </footer>
  );
};

export default Footer;