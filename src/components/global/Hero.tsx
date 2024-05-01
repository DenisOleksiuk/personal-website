'use client';
import React, { useEffect, useState } from 'react';
import { Highlight } from '../ui/highlight';
import ComputersCanvas from '../canvas/Computers';
import RotateMessage from '../ui/rotate-message';

const Hero = () => {
    const [showComputersCanvas, setShowComputersCanvas] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComputersCanvas(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="h-screen">
            <div className="max-w-2xl flex justify-center mt-10 mx-auto p-4">
                <Highlight className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-black dark:to-neutral-600  text-center font-sans font-bold">
                    F*cking Awesome Website
                </Highlight>
            </div>

            <RotateMessage />
            {showComputersCanvas && <ComputersCanvas />}
        </section>
    );
};

export default Hero;
