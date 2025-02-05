'use client'
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Codesmith',
        role: 'Senior Software Engineer',
        duration: '08/2023 - 03/2025',
        description: 'Developed dynamic, scalable, and maintainable web applications using Vue.js, Solid.js, and Next.js. Designed high-performance microservices in Go, ensuring efficient concurrency and low-latency processing. Led and mentored junior developers, fostering a collaborative team environment.',
    },
    {
        company: 'EzExam',
        role: 'Software Engineer 2',
        duration: '02/2022 - 08/2023',
        description: 'Enhanced the company’s platform using Next.js and jQuery. Built analytical dashboards with Chart.js and JsGrid. Specialized in WebGL and Three.js, implementing custom shaders for advanced 3D visual effects.',
    },
    {
        company: 'Greenboard',
        role: 'Software Engineer',
        duration: '02/2021 - 08/2022',
        description: 'Developed responsive web applications using HTML, CSS, and Bootstrap. Designed custom front-end components based on Figma designs and collaborated with a team of front-end developers.',
    },
];


const Experience = () => {
    return (
        <section className="py-20 bg-[rgb(17,24,39,0.5)]">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.h2
                    className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                {/* Timeline Container */}
                <div className="relative border-l-2 border-gray-700 ml-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 mb-12"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {/* Bullet Point */}
                            <div className="absolute left-[-9px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>

                            {/* Card */}
                            <div className="bg-gray-800 p-6 rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-purple-500/20">
                                <h3 className="text-lg font-semibold text-blue-400">{exp.role}</h3>
                                <p className="text-sm text-gray-400">{exp.company} | {exp.duration}</p>
                                <p className="text-gray-300 mt-2">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
