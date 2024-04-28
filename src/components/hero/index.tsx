import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeams } from '../ui/background-beams';
import { Highlight } from '../ui/highlight';

const Hero = () => {
    return (
        <section>
            <div className="max-w-2xl mx-auto mt-10 p-4">
                <Highlight className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Welcome to My Personal Website
                </Highlight>
            </div>
            <BackgroundBeams />
        </section>
    );
};

export default Hero;
