"use client";

import { motion } from "motion/react";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

export default function AboutPage() {
    const skills = [
        { name: "Frontend Development", icon: Layout, description: "Building responsive, accessible, and performant user interfaces with React and Next.js." },
        { name: "Backend Integration", icon: Zap, description: "Connecting frontends to robust APIs and managing data flow efficiently." },
        { name: "UI/UX Design", icon: Smartphone, description: "Crafting intuitive and beautiful experiences that delight users." },
        { name: "Clean Code", icon: Code, description: "Writing maintainable, scalable, and self-documenting code." },
    ];

    const techStack = [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Git", "Figma"
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center mb-16"
            >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
                    About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    With a strong foundation in web development and design, I specialize in creating seamless and engaging digital experiences. My passion lies in blending creativity with functionality to deliver websites that not only look great but also perform flawlessly across all devices.
                </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                            <skill.icon size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Tech Stack */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 text-center"
            >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {techStack.map((tech, index) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}