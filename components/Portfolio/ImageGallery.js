'use client'
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const openImage = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Dynamic Grid Layout */}
            <div className={`grid gap-2 p-2 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : images.length === 3 ? 'grid-cols-2 grid-rows-2' : 'grid-cols-2'}`}>
                {images.slice(0, 4).map((image, idx) => (
                    <div key={idx} className={`overflow-hidden rounded-lg group relative ${images.length === 3 && idx === 0 ? 'col-span-2 row-span-2' : ''}`}>
                        <img
                            src={image}
                            alt={`${title} preview ${idx + 1}`}
                            className="w-full h-32 object-cover cursor-pointer 
                                       transform transition-all duration-300 
                                       group-hover:scale-110 group-hover:brightness-110
                                       hover:shadow-lg hover:shadow-purple-500/20"
                            onClick={() => openImage(idx)}
                        />
                    </div>
                ))}
            </div>

            {/* Full-Screen Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-6xl max-h-[90vh] flex justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Display Full Image */}
                            <motion.img
                                key={currentIndex}
                                src={images[currentIndex]}
                                alt={`${title} full view`}
                                className="max-h-[85vh] w-auto rounded-lg shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Close Button */}
                            <button className="absolute top-4 right-4 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20" onClick={() => setIsOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>

                            {/* Prev Button */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20" onClick={prevImage}>
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Next Button */}
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20" onClick={nextImage}>
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-gray-800 rounded-full py-1 px-3 text-sm">
                                {currentIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageGallery;
