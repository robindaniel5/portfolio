import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Custom Cursor Logic
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };

    const handleMouseOver = (e) => {
      // Track links and buttons for cursor scaling
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorX = useSpring(mousePosition.x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 500, damping: 28 });

  // Theme Logic: Dark (Hero -> Services) -> White (Contact) -> Dark (Footer)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.65, 0.70, 0.90, 0.95, 1],
    ['#0a0a0a', '#0a0a0a', '#ffffff', '#ffffff', '#0a0a0a', '#0a0a0a']
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.65, 0.70, 0.90, 0.95, 1],
    ['#ffffff', '#ffffff', '#0a0a0a', '#0a0a0a', '#ffffff', '#ffffff']
  );

  // Faint Text Parallax & Opacity Fade
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.03, 0.08, 0.04]);

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor, color }}
      className="min-h-screen w-full transition-colors duration-200 relative cursor-none"
    >
      {/* Custom Red Dot Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-minimal-red rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovered ? 2 : 1,
          opacity: !hasMoved ? 0 : 1, // Hide cursor if not moved yet
        }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      />

      {/* Background Faint Text Layer (The Tech Stack) */}
      <motion.div
        style={{ y: bgTextY, opacity: bgTextOpacity }}
        className="fixed inset-0 z-0 pointer-events-none select-none flex flex-wrap gap-10 items-center justify-center font-heading text-[12vw] md:text-[8vw] font-black leading-none text-white overflow-hidden"
      >
        <span className="w-full text-center">JAVA</span>
        <span className="w-full text-center">SPRING BOOT</span>
        <span className="w-full text-center">REACT JS</span>
        <span className="w-full text-center">TAILWIND CSS</span>
        <span className="w-full text-center">MYSQL</span>
      </motion.div>

      <div className="relative z-10 w-full h-full">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </motion.div>
  );
}

export default App;
