import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }
};

function AnimatedSection({ children, className = "", animationType = "slideUp", delay = 0 }) {
  const selectedAnimation = animations[animationType] || animations.slideUp;
  
  // Combine custom delay if needed
  const finalAnimation = {
    ...selectedAnimation,
    visible: {
      ...selectedAnimation.visible,
      transition: {
        ...selectedAnimation.visible.transition,
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={finalAnimation}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;