import { motion } from "framer-motion";

import styles from "./Logo.module.css";

import img from './sun.png';

export default function Logo(){
  return (
    <div className={styles.logoWrapper}>
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
        <img className={styles.imgLogo} src={img} alt="sun" />
      </motion.div>
      <span className={styles.logoTxt}> Your Weather</span>
    </div>
    
  )
}