import { motion } from "framer-motion";

import "./Logo.module.css";

import img from './sun.png';

export default function Logo(){
  return (
    <div className="logoContainer">
      <motion.div
        style={{
          width: "60px",
          height: "60px",
          position: "relative",
        }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <img className='imgLogo' src={img} alt="sun" />
      </motion.div>
      <span className='logoTxt'> Your Weather</span>
    </div>
    
  )
}