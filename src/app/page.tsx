import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/global/Navbar';
import { ModeToggle } from '@/components/global/mode-toggle';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Footer from '@/components/global/Footer';
import HeroSection from '@/components/hero';
import Certificats from '@/components/certificats';
import Projects from '@/components/projects';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:bg-neutral-950">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 ">
                <HeroSection />
                <Projects />
                <Certificats />
            </main>
            <Footer />
        </div>
    );
}
