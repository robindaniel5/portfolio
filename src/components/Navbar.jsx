import { motion } from 'framer-motion';
import { Search, User } from 'lucide-react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference"
        >
            {/* Logo: Minimal Text Logo */}
            <div >

            </div>

            {/* Navigation links & Icons */}
            <div className="flex items-center gap-8 md:gap-12">
                <div className="hidden md:flex items-center gap-8 font-body text-xs tracking-[0.2em] uppercase font-bold text-white">
                    <a href="#about" className="hover:text-minimal-red transition-colors duration-300">ABOUT</a>
                    <a href="#services" className="hover:text-minimal-red transition-colors duration-300">SERVICES</a>
                    <a href="#skills" className="hover:text-minimal-red transition-colors duration-300">SKILLS</a>

                    <a href="#contact" className="hover:text-minimal-red transition-colors duration-300">CONTACT</a>
                </div>

                <div className="flex items-center gap-5 text-white">
                    <button className="hover:text-minimal-red transition-colors duration-300 cursor-pointer">
                        <Search size={18} strokeWidth={2} />
                    </button>
                    <button className="hover:text-minimal-red transition-colors duration-300 cursor-pointer">
                        <User size={18} strokeWidth={2} />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
