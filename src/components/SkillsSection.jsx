import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaJava, FaReact, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiApachekafka, SiHibernate } from "react-icons/si";

const skills = [
    { name: "JAVA", level: 90, icon: <FaJava /> },
    { name: "SPRING BOOT", level: 85, icon: <SiSpringboot /> },
    { name: "HIBERNATE", level: 80, icon: <SiHibernate /> },
    { name: "REACT JS", level: 75, icon: <FaReact /> },

    { name: "MONGODB", level: 75, icon: <SiMongodb /> },
    { name: "DOCKER", level: 65, icon: <FaDocker /> },
    { name: "KAFKA", level: 60, icon: <SiApachekafka /> },
];

export default function SkillsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative py-32 md:py-48 min-h-screen w-full flex flex-col justify-center overflow-hidden"
        >
            {/* Background Grid Lines (matches other sections) */}
            <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Top Section: 04 Counter */}
                <div className="flex justify-between items-center mb-20 w-full">
                    <span className="font-heading text-6xl font-bold text-white/10 select-none cursor-default">04</span>
                </div>

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24"
                >
                    <h2 className="font-heading text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase whitespace-normal break-words">
                        CORE <br /> <span className="text-minimal-red">SKILLS</span>
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 border-t border-white/10 pt-16">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                            className="group relative"
                        >
                            {/* Skill Info */}
                            <div className="flex justify-between items-end mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl text-white/80 group-hover:text-minimal-red transition-colors duration-300">
                                        {skill.icon}
                                    </span>
                                    <h3 className="font-heading text-lg font-bold tracking-widest uppercase">
                                        {skill.name}
                                    </h3>
                                </div>
                                <span className="font-body text-[10px] font-bold text-white/40 tracking-widest">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Minimalist Progress Bar (Block Style) */}
                            <div className="relative h-[2px] w-full bg-white/10 overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-minimal-red"
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${skill.level}%` } : {}}
                                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "circOut" }}
                                />
                            </div>

                            {/* Subtle Hover Glow/Effect */}
                            <div className="absolute -inset-4 bg-minimal-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Detail Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-24 flex justify-end"
                >
                    <p className="font-body text-[10px] uppercase tracking-[0.4em] text-white/30 max-w-xs text-right leading-loose">
                        Continuously evolving with emerging technologies and best practices in distributed systems.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
