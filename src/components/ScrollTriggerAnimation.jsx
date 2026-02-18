import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom easing for smooth feel
    } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

function ScrollTriggerAnimation({ children, className = "", delay = 0, stagger = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Sub-component for children in a staggered container
export const AnimatedItem = ({ children, className = "" }) => (
  <motion.div variants={variants} className={className}>
    {children}
  </motion.div>
);

export default ScrollTriggerAnimation;