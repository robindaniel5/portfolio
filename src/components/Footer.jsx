import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github } from 'lucide-react';
import DeveloperPhoto from '../assets/IMG-20251212-WA0007.jpg';

export default function Footer() {
    return (
        <footer
            id="footer"
            className="relative h-[60vh] md:h-[80vh] w-full flex flex-col justify-center items-center grid-lines-dark overflow-hidden bg-minimal-dark text-white pt-20"
        >
            {/* Final Circular Portrait */}
            <div className="flex flex-col items-center pointer-events-none mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-minimal-red/50 shadow-[0_0_60px_rgba(225,42,42,0.2)]"
                >
                    <img
                        src={DeveloperPhoto}
                        alt="Robin Daniel Portrait Footer"
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 font-heading text-[10px] tracking-[0.5em] uppercase font-bold text-minimal-red"
                >
                    READY TO START?
                </motion.div>
            </div>

            {/* Social Links (Red-Stroked Circles) */}
            <div className="flex gap-8 mb-16 relative z-10">
                {[
                    { Icon: Github, href: "https://github.com/robindaniel5" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/robin-daniel-95407b328/" },
                    { Icon: Instagram, href: "https://www.instagram.com/rawbin_daniel5/?hl=en" }
                ].map(({ Icon, href }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 42, 42, 1)', color: '#ffffff', borderColor: '#ff2a2a' }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-minimal-red flex items-center justify-center text-minimal-red transition-all duration-300 shadow-lg"
                    >
                        <Icon size={20} md:size={24} />
                    </motion.a>
                ))}
            </div>

            {/* Copyright & Name */}
            <div className="text-center opacity-30 select-none">
                <div className="font-heading text-4xl md:text-6xl font-black uppercase tracking-widest mb-2">
                    ROBIN DANIEL
                </div>
                <div className="font-body text-[8px] md:text-[10px] uppercase tracking-[0.4em]">
                    © 2026. ALL RIGHTS RESERVED.
                </div>
            </div>

            {/* Section Counter (Final) */}
            <div className="absolute bottom-10 right-10 opacity-5 select-none font-heading text-6xl font-black">
                04
            </div>
        </footer>
    );
}
