import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Notification({ message, type, isVisible, onClose }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -100, x: '-50%' }}
                    animate={{ opacity: 1, y: 20, x: '-50%' }}
                    exit={{ opacity: 0, y: -100, x: '-50%' }}
                    className="fixed top-0 left-1/2 z-[200] w-[90%] max-w-md"
                >
                    <div className="bg-black text-white p-6 shadow-2xl border-l-4 border-minimal-red flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            {type === 'success' ? (
                                <CheckCircle className="text-minimal-red" size={24} />
                            ) : (
                                <AlertCircle className="text-minimal-red" size={24} />
                            )}
                            <div>
                                <p className="font-heading text-lg font-bold uppercase tracking-widest leading-none">
                                    {type === 'success' ? 'SUCCESS' : 'ERROR'}
                                </p>
                                <p className="font-body text-xs text-white/60 mt-1 uppercase tracking-wider">
                                    {message}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/40 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    {/* Progress bar timer */}
                    <motion.div
                        initial={{ width: '100%' }}
                        animate={{ width: 0 }}
                        transition={{ duration: 5, ease: 'linear' }}
                        className="h-1 bg-minimal-red absolute bottom-0 left-0"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
