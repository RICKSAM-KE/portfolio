import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Samuel.dev</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="text-gray-400 hover:text-indigo-500 transition-colors">
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Samuel Kavulavu Gathatwa. All rights reserved.</p>
                    <p>Designed & Built with Next.js, Tailwind & Motion.</p>
                </div>
            </div>
        </footer>
    );
}
