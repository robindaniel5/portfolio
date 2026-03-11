import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const services = [
    {
        title: "FRONTEND UI/UX",
        desc: "Engineering pixel-perfect, highly interactive user interfaces using React, Framer Motion, and Tailwind CSS. Focus on uncompromised minimalist aesthetics and fluid 60fps animations."
    },
    {
        title: "BACKEND ARCHITECTURE",
        desc: "Designing robust, scalable backend systems and RESTful APIs using Java and Spring Boot. Clean architecture, high availability, and secure endpoints."
    },
    {
        title: "FULL STACK SYNERGY",
        desc: "Bridging the gap between conceptual design and database architecture. Delivering end-to-end single page applications with deep performance optimization."
    }
];

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative py-32 md:py-48 min-h-screen w-full flex flex-col justify-center overflow-hidden"
        // Note: The light background and dark text color are orchestrated by App.jsx
        >
            {/* Dark grid overlay for light theme */}
            <div className="absolute inset-0 grid-lines-light opacity-30 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Top Section: Dark Arrow Nav & 03 Counter */}
                <div className="flex justify-between items-center mb-20 w-full">
                    {/* Dark circles with light arrows for the light theme */}
                    <div />

                    <span className="font-heading text-6xl font-bold opacity-10 select-none cursor-default">03</span>
                </div>

                {/* Massive Sans-Serif Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24"
                >
                    <h2 className="font-body text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase whitespace-normal break-words mix-blend-difference">
                        SERVICES & <br /> <span className="text-minimal-red mix-blend-normal">CAPABILITIES</span>
                    </h2>
                </motion.div>

                {/* Detailed Services Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 border-t border-minimal-darker/10 pt-16">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                            className="group"
                        >
                            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 group-hover:text-minimal-red transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="font-body text-sm leading-relaxed opacity-70">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
