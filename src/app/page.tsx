import { ModeToggle } from '@/components/global/mode-toggle';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
            <Head>
                <title>My Personal Website</title>
                <meta
                    name="description"
                    content="Welcome to my personal website. Here you can find more about my projects and skills."
                />
            </Head>
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Welcome to My Personal Website</h1>
                    <nav>
                        <Link
                            href="/about"
                            className="text-blue-500 hover:text-blue-700 mx-2"
                        >
                            About Me
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-blue-500 hover:text-blue-700 mx-2"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/blog"
                            className="text-blue-500 hover:text-blue-700 mx-2"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-blue-500 hover:text-blue-700 mx-2"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-4">
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">About Me</h2>
                    <p>
                        I&apos;m a passionate developer with a focus on creating
                        meaningful software. Explore my site to see what I&apos;ve been
                        working on!
                    </p>
                </section>
                <section className="mt-8">
                    <h2 className="text-lg font-semibold">Portfolio</h2>
                    <p>Check out my projects to see what I can do.</p>
                </section>
            </main>
            <footer className="bg-white shadow-md py-4 mt-8">
                <p className="text-center">
                    © {new Date().getFullYear()} My Personal Website. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
