
import "@/app/home/home.css";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";



const metadata: Metadata = {
  title: 'samuel.dev',
  description: 'Portfolio of Samuel Kavulavu, a web developer specializing in front-end development.',
  metadataBase: new URL('https://samuel.dev'),
};





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>


        <title>SAMUEL KAVULAVU- WEB DEVELOPER</title>

        <meta name="description" content="Welcome to my portfolio website." />
      </head>
      <body className="home antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}