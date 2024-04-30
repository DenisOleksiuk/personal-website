import React from 'react';
import { motion } from 'framer-motion';
import { Highlight } from '../ui/highlight';
import ComputersCanvas from '../canvas/Computers';

const Hero = () => {
    return (
        <section className="h-screen">
            <div className="max-w-2xl flex justify-center mt-10 mx-auto p-4">
                <Highlight className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-black dark:to-neutral-600  text-center font-sans font-bold">
                    F*cking Awesome Website
                </Highlight>
            </div>

            <ComputersCanvas />
        </section>
    );
};

export default Hero;
