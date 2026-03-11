import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import ThynktechLogo from '../assets/thynktech_logo.jpg';

const stats = [
    { label: "EXPERIENCE", value: "1+ YRS" },
    { label: "PROJECTS", value: "10+" },
    { label: "SUCCESS", value: "100%" }
];

export default function AboutSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-32 md:py-48 min-h-screen w-full grid-lines-dark flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                {/* Top Section: 02 Counter (Arrows Removed) */}
                <div className="flex justify-between items-center mb-24 w-full">
                    <span className="font-heading text-6xl font-bold text-white/10 select-none">02</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                    {/* Left: Text Paragraphs & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 text-white">
                            THE <span className="text-minimal-red">ENGINEER</span>
                        </h2>

                        <div className="space-y-6 text-white/60 font-body text-sm leading-relaxed mb-12">
                            <p>
                                Hey there! I'm Robin Daniel, an Electronics and Telecommunication Engineer and a full-stack developer with a passion for building seamless digital experiences. I specialize in creating clean, modern, and user-friendly interfaces that are both beautiful and functional.
                            </p>
                            <p>
                                Operating beyond the generic, I treat code as a craft—a meticulous assembly of logic that yields highly interactive, robust, and beautifully minimal scalable applications.
                            </p>
                        </div>

                        {/* Bold White Stats Circles */}
                        <div className="flex flex-wrap gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white flex flex-col items-center justify-center bg-minimal-dark hover:bg-white hover:text-minimal-dark transition-colors duration-500 group"
                                >
                                    <span className="font-heading text-xl md:text-3xl font-bold mb-1">{stat.value}</span>
                                    <span className="font-heading text-[8px] md:text-[10px] tracking-widest text-minimal-red group-hover:text-minimal-dark font-bold uppercase">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Testimonial Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="bg-white/5 border border-white/10 p-10 md:p-14 backdrop-blur-sm relative group hover:border-minimal-red/50 transition-colors duration-500">
                            <Quote size={40} className="text-minimal-red opacity-30 absolute top-8 left-8" />
                            <p className="relative z-10 font-body text-lg md:text-xl leading-relaxed text-white italic mt-8 mb-8">
                                "Robin delivered an interface that was not only incredibly striking but possessed the exact minimalist precision we needed. The underlying architecture was flawless."
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 flex items-center justify-center p-2">
                                    <img src={ThynktechLogo} alt="Thynktech India Logo" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold uppercase tracking-widest text-sm text-white">Thynktech India</h4>
                                    <span className="font-body text-[10px] uppercase tracking-widest text-minimal-red">Software Company</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
