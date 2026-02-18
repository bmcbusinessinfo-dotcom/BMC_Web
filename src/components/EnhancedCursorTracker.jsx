import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

function EnhancedCursorTracker() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Softer spring for fluid, organic feel
  const springConfig = { damping: 40, stiffness: 200, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[40]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(255,100,0,0.15) 0%, rgba(255,50,0,0.08) 30%, rgba(100,0,0,0.02) 60%, transparent 80%)',
        filter: 'blur(50px)',
        mixBlendMode: 'screen',
      }}
    />
  );
}

export default EnhancedCursorTracker;