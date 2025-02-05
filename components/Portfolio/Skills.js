import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaAws, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiSolid } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";

const skillsData = [
    { name: 'TypeScript', icon: <SiNextdotjs className="text-blue-500 text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-gray-300 text-4xl" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-400 text-4xl" /> },
    { name: 'Solid.js', icon: <SiSolid className="text-blue-600 text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: 'Three.js', icon: <TbBrandThreejs className="text-blue-800 text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-4xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500 text-4xl" /> },
    { name: 'Go Lang', icon: <FaGolang className="text-sky-400 text-4xl" /> },
    { name: 'AWS', icon: <FaAws className="text-orange-500 text-4xl" /> },
    ];

const Skills = () => {
    return (
        <section className="py-20 relative">
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x' />
            </div>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    My Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skillsData.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 rounded-xl
                        bg-gray-800 hover:bg-gray-700 transition-all duration-300
                        transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            {skill.icon}
                            <p className="text-gray-300 font-semibold mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
