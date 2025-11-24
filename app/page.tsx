"use client";



import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Code, Layout, Smartphone, Zap, MapPin, Phone, Send } from "lucide-react";
import { Footer } from "@/components/footer";

export default function HomePage() {
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
        <>
            {/* Hero Section */}
            <section id="home" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Background Blobs */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 right-0 -z-10 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[80px] opacity-30 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 max-w-3xl"
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Building digital <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400">
                            experiences that matter.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I'm Samuel, a passionate Web Developer crafting pixel-perfect, performant, and accessible interfaces. I turn ideas into reality with code.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                        >
                            Contact Me
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#about"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-900 dark:text-white transition-all duration-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 dark:focus:ring-gray-700"
                        >
                            About Me
                        </Link>
                    </div>

                    {/* Social Proof / Icons */}
                    <div className="pt-12 flex items-center justify-center gap-6 text-gray-400 dark:text-gray-500">
                        <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="hover:text-indigo-500 transition-colors">
                            <Mail className="h-6 w-6" />
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
                        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
                    </h2>
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
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
                        Get in <span className="text-indigo-600 dark:text-indigo-400">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'd love to hear from you. Let's turn your vision into reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</p>
                                <p className="text-sm text-gray-500 mt-1">Send me an email anytime!</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                                <a href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    Chat on WhatsApp
                                </a>
                                <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 5pm.</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                                <p className="text-sm text-gray-500 mt-1">Open to remote work worldwide.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
