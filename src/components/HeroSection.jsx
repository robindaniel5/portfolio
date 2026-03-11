import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DeveloperPhoto from '../assets/Developerphoto2.JPG';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function HeroSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    // Name Placement: "ROBIN" left, "DANIEL" right
    // Masking Fix: slide apart slightly on scroll to frame further
    const xRobin = useTransform(scrollYProgress, [0, 1], ['-10%', '-25%']);
    const xDaniel = useTransform(scrollYProgress, [0, 1], ['10%', '25%']);

    // Portrait Animation: scale down and slide left on scroll towards Services
    const yImage = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
    const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const xImage = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

    const opacityHero = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20"
        >
            {/* Background thin red target pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-minimal-red/60 animate-target z-0" />

            <motion.div style={{ opacity: opacityHero }} className="relative z-10 w-full max-w-[1400px] mx-auto px-6 h-full flex flex-col justify-center">

                {/* Main Content Area */}
                <div className="relative flex flex-col items-center justify-center w-full min-h-[65vh]">

                    {/* Flanking Name Layout */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 w-full">
                        <div className="flex w-full items-center justify-center gap-12 md:gap-24">
                            <motion.h1
                                style={{ x: xRobin }}
                                className="font-heading text-[10vw] md:text-[12vw] leading-none font-black uppercase tracking-tighter text-white select-none whitespace-nowrap"
                            >
                                ROBIN
                            </motion.h1>

                            {/* Empty space for photo in between */}
                            <div className="w-[30vw] max-w-[300px]" />

                            <motion.h1
                                style={{ x: xDaniel }}
                                className="font-heading text-[10vw] md:text-[12vw] leading-none font-black uppercase tracking-tighter text-white select-none whitespace-nowrap"
                            >
                                DANIEL
                            </motion.h1>
                        </div>
                    </div>

                    {/* Central Portrait (Foreground) */}
                    <motion.div
                        style={{ y: yImage, scale: scaleImage, x: xImage }}
                        className="relative z-20 w-[60vw] max-w-[380px] aspect-[3.5/4] overflow-hidden rounded-sm"
                    >
                        <img
                            src={DeveloperPhoto}
                            alt="Robin Daniel Portrait"
                            className="w-full h-full object-cover shadow-2xl shadow-black/80"
                            style={{
                                filter: 'contrast(1.1) brightness(0.95) saturate(1.1)',
                            }}
                        />
                    </motion.div>

                    {/* Skills Subtitle below the name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="relative z-30 mt-8 mb-4 pointer-events-none"
                    >
                        <p className="font-heading text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-minimal-red text-center">
                            Java • Spring Boot • React JS • Tailwind CSS • MySQL
                        </p>
                    </motion.div>

                </div>

                {/* Desktop Extra Details */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-7xl px-6 flex justify-between pointer-events-none z-30">
                    <div className="hidden md:block pointer-events-auto">
                        <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-white/40 mb-2 block font-bold">
                            ENGINEER
                        </span>
                        <p className="font-body text-[10px] leading-relaxed text-white/30 max-w-[150px] uppercase tracking-widest">
                            Crafting modular architecture and high-fidelity interfaces.
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col items-end pointer-events-auto gap-4">
                        {/* Interactive Button */}
                        <a href="#contact" className="btn-interactive border border-white/20 px-8 py-3 bg-minimal-dark text-white rounded-none hover:bg-minimal-red hover:border-minimal-red transition-all duration-300">
                            <span className="font-heading text-[10px] uppercase tracking-widest font-bold h-4 relative overflow-hidden flex w-full">
                                <span className="btn-text-normal absolute w-full text-center">CONNECT</span>
                                <span className="btn-text-hover absolute w-full text-center">NOW</span>
                            </span>
                        </a>

                        <div className="flex gap-3 mt-4">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-minimal-red hover:text-minimal-red transition-colors duration-300">
                                    <Icon size={12} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section Counter */}
                <div className="absolute bottom-10 left-6 z-30 pointer-events-none">
                    <span className="font-heading text-6xl font-black text-white/5 select-none">01</span>
                </div>

            </motion.div>
        </section>
    );
}
