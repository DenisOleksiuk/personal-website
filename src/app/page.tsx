import Hero from '@/components/global/Hero';
import Projects from '@/components/global/Projects';
import Certificats from '@/components/global/Certificats';

export default function Home() {
    return (
        <div className="overflow-hidden flex flex-col min-h-screen bg-gray-100 text-gray-800 dark:bg-neutral-950">
            <main className="flex-grow container mx-auto px-4 ">
                <Hero />
                {/* <Projects /> */}
                {/* <Certificats /> */}
            </main>
        </div>
    );
}
