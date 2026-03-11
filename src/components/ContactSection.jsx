import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Notification from './Notification';

export default function ContactSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', details: '' });
    const [notification, setNotification] = useState({ isVisible: false, message: '', type: 'success' });

    const showNotification = (message, type) => {
        setNotification({ isVisible: true, message, type });
    };

    const closeNotification = () => {
        setNotification(prev => ({ ...prev, isVisible: false }));
    };

    // Auto-close notification after 5 seconds
    useEffect(() => {
        if (notification.isVisible) {
            const timer = setTimeout(closeNotification, 5000);
            return () => clearTimeout(timer);
        }
    }, [notification.isVisible]);

    const handleChange = (e) =>
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiBase = import.meta.env.VITE_API_BASE_URL || '';
            const response = await fetch(`${apiBase}/message/send`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullname: formData.name,
                    email: formData.email,
                    projectdetails: formData.details
                })
            });
            if (response.ok) {
                showNotification('Thanks for reaching out to me! Will contact you shortly.', 'success');
                setFormData({ name: '', email: '', details: '' });
            } else {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            showNotification('Error connecting to backend.', 'error');
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative py-32 md:py-64 min-h-screen w-full flex items-center justify-center overflow-hidden grid-lines-light bg-white text-black"
        >
            <Notification
                isVisible={notification.isVisible}
                message={notification.message}
                type={notification.type}
                onClose={closeNotification}
            />
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 contact-form-area h-full">

                <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-12 md:gap-20 lg:gap-40 items-start">

                    {/* Left Side: Vertical Heading (Stacked on mobile) */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="origin-top md:block hidden"
                    >
                        <h2 className="font-heading text-[12vw] md:text-[8vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-none text-black vertical-text opacity-10 select-none">
                            CONNECT.
                        </h2>
                    </motion.div>

                    {/* Mobile Only Horizontal Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="md:hidden"
                    >
                        <h2 className="font-heading text-6xl font-black uppercase tracking-tighter text-black opacity-10">
                            CONNECT.
                        </h2>
                    </motion.div>

                    {/* Right Side: Minimalist Form */}
                    <div className="w-full h-full flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-2xl w-full"
                        >
                            <div className="mb-12 md:mb-20">
                                <h3 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-black">
                                    LET’S CRAFT <br /> YOUR IDEA.
                                </h3>
                                <p className="font-body text-xs md:text-sm font-bold text-minimal-red uppercase tracking-[0.3em]">
                                    Send a message or reach out via socials.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        className="minimal-input"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email/Phone Number"
                                        className="minimal-input"
                                        required
                                    />
                                </div>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    placeholder="Project Details"
                                    rows={4}
                                    className="minimal-input resize-none"
                                    required
                                />

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="mt-4 md:mt-8 bg-black text-white py-4 md:py-5 px-8 md:px-10 font-heading text-base md:text-lg font-bold uppercase tracking-widest border border-transparent hover:border-minimal-red transition-colors duration-300 w-full md:w-fit"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Dark background overlay for theme flip transition at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-minimal-dark translate-y-full" />
        </section>
    );
}
