import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronLeft } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        subtitle: 'Act I · React + Spring Boot',
        description: 'A complete e-commerce solution with product management, payment integration, and admin dashboard.',
        tags: ['React', 'Spring Boot', 'MySQL'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    },
    {
        id: 2,
        title: 'Task Manager Pro',
        subtitle: 'Act II · Frontend React',
        description: 'Drag-and-drop task management app with real-time collaboration and productivity analytics.',
        tags: ['React', 'Firebase', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
    },
    {
        id: 3,
        title: 'Portfolio CMS',
        subtitle: 'Act III · Backend Java',
        description: 'A headless CMS built with Spring Boot for managing portfolio content and secure media assets.',
        tags: ['Java', 'Spring Boot', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    },
    {
        id: 4,
        title: 'Real-Time Chat App',
        subtitle: 'Act IV · WebSockets',
        description: 'A secure messaging platform with private rooms, file sharing, and end-to-end encryption.',
        tags: ['React', 'Node.js', 'Socket.IO'],
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    },
];

export default function ProjectsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const project = projects[currentIndex];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 45 : -45
        })
    };

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-32 md:py-48 bg-cinematic-darker overflow-hidden"
        >
            {/* Cinematic divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cinematic-red/30 to-transparent" />

            {/* Background ambient light based on current project */}
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(225,29,72,0.8) 0%, transparent 60%)`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center w-full"
                >
                    <span className="font-heading text-[10px] tracking-[0.4em] uppercase text-cinematic-red mb-3 block drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]">
                        FEATURED PRESENTATIONS
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] text-white">
                        PROJECT <span className="text-outline">SHOWCASE</span>
                    </h2>
                </motion.div>

                {/* Horizontal Slider Area */}
                <div className="relative w-full max-w-5xl h-[700px] sm:h-[600px] md:h-[450px] flex items-center justify-center perspective-1000">

                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                rotateY: { duration: 0.6 }
                            }}
                            className="absolute w-full h-full flex flex-col md:flex-row items-center border border-white/10 bg-cinematic-gray/30 backdrop-blur-md rounded-2xl shadow-2xl shadow-black overflow-hidden md:overflow-visible"
                        >
                            {/* Project Info Panel */}
                            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col h-full bg-gradient-to-b md:bg-gradient-to-r from-cinematic-darker/90 to-transparent rounded-t-2xl md:rounded-l-2xl z-20">
                                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-cinematic-red mb-4 block">
                                    {project.subtitle}
                                </span>
                                <h3 className="font-heading text-2xl md:text-5xl font-bold uppercase tracking-wide mb-6 group-hover:text-cinematic-red transition-colors duration-300 drop-shadow-lg">
                                    {project.title}
                                </h3>

                                <p className="text-white/60 font-body text-xs md:text-base leading-relaxed mb-8 flex-grow line-clamp-4 md:line-clamp-none">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="font-heading text-[8px] md:text-[10px] tracking-widest uppercase px-2 py-1 md:px-3 md:py-1.5 border border-white/10 text-white/40 bg-black/40 rounded-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors duration-300">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-red group-hover:border-cinematic-red transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0)] group-hover:shadow-[0_0_15px_rgba(225,29,72,0.6)]">
                                            <Github size={18} />
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors duration-300">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cinematic-red group-hover:border-cinematic-red transition-all duration-300 shadow-[0_0_15px_rgba(225,29,72,0)] group-hover:shadow-[0_0_15px_rgba(225,29,72,0.6)]">
                                            <ExternalLink size={18} />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Overlapping Project Image with 3D Tilt (Adjusted for mobile) */}
                            <div className="absolute bottom-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-[60%] h-[200px] sm:h-[300px] md:h-[110%] md:-right-10 z-10 translate-y-0 md:translate-y-0 opacity-40 md:opacity-100 group">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                        rotateY: -10,
                                        rotateX: 5,
                                        z: 50
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className="w-full h-full rounded-b-2xl md:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-t-4 md:border-4 border-white/10 object-cover"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover filter brightness-50 md:brightness-75 hover:brightness-100 transition-all duration-500"
                                    />
                                    {/* Cinematic vignette on image */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-6 z-30">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-cinematic-red/20 hover:border-cinematic-red hover:shadow-[0_0_20px_rgba(225,29,72,0.5)] transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex gap-3">
                            {projects.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === i
                                        ? 'bg-cinematic-red scale-150 shadow-[0_0_10px_rgba(225,29,72,0.8)]'
                                        : 'bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-cinematic-red/20 hover:border-cinematic-red hover:shadow-[0_0_20px_rgba(225,29,72,0.5)] transition-all duration-300 backdrop-blur-sm"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
