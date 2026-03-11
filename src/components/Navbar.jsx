import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "ABOUT", href: "#about" },
        { name: "SERVICES", href: "#services" },
        { name: "SKILLS", href: "#skills" },
        { name: "PROJECTS", href: "#projects" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference"
            >
                {/* Logo Placeholder */}
                <div className="w-10 h-10" />

                {/* Desktop/Tablet Icons & Menu toggle */}
                <div className="flex items-center gap-6 md:gap-12">
                    <div className="hidden lg:flex items-center gap-8 font-body text-xs tracking-[0.2em] uppercase font-bold text-white">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-minimal-red transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-5 text-white">
                        <button className="hidden sm:block hover:text-minimal-red transition-colors duration-300 cursor-pointer">
                            <Search size={18} strokeWidth={2} />
                        </button>
                        <button className="hidden sm:block hover:text-minimal-red transition-colors duration-300 cursor-pointer">
                            <User size={18} strokeWidth={2} />
                        </button>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden hover:text-minimal-red transition-colors duration-300 cursor-pointer"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={24} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[60] bg-minimal-dark text-white p-8 flex flex-col justify-center"
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-minimal-red transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="font-heading text-4xl font-black tracking-tighter hover:text-minimal-red transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-20 border-t border-white/10 pt-10 flex gap-6">
                            <Search size={20} className="opacity-40" />
                            <User size={20} className="opacity-40" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
