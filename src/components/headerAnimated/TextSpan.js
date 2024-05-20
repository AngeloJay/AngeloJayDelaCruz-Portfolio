import React from 'react'
import { motion } from 'framer-motion'
import './Textspan.css';

const TextSpan = ({ children }) => {

  return (
    
    <motion.span 
    className='motion-span' 
    whileHover={{
        scale: 1.5,
        color: "rgb(206, 222, 189)"
    }}>
        {children}
    </motion.span>
  )
}

export default TextSpan
