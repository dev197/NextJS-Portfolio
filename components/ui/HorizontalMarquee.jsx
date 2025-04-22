import React from 'react'
import { motion } from "framer-motion";

const HorizontalMarquee = () => {
  return (
    <div className="overflow-hidden  mt-[480]  w-full  text-white py-2">
      <motion.div
        className="flex space-x-16 text-9xl font-serif font-thin "
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration:9 , ease: "linear" }}
      >
        <span>Dev</span>
        <span>Gupta</span>
        <span>Dev</span>
        <span>Gupta</span>

        <span>Dev</span>
        <span>Gupta</span>

        <span>Dev</span>
        <span>Gupta</span>

        <span>Dev</span>
        <span>Gupta</span>

        <span>Dev</span>
        <span>Gupta</span>

        <span>Dev</span>
        <span>Gupta</span>
        <span>Dev</span>
        <span>Gupta</span>
        <span>Dev</span>
        <span>Gupta</span>
        <span>Dev</span>
        <span>Gupta</span>
        <span>Dev</span>
        <span>Gupta</span>
        
        
      </motion.div>
    </div>
  );
};

export default HorizontalMarquee