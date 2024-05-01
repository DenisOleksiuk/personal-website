'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { Highlight } from './highlight';

const Rotate = () => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

    return (
        <>
            <div className="flex justify-center items-center">
                <Highlight
                    delay={2}
                    className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-black dark:to-neutral-200  text-center font-sans font-bold"
                >
                    rotate the computer
                </Highlight>
            </div>
            <motion.div
                initial={{
                    rotate: 0
                }}
                animate={{
                    rotate: [60, 0, 60]
                }}
                transition={{
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity
                }}
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 color-white"
            >
                <motion.span
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 4
                    }}
                >
                    <RefreshCw size={40} color="white" className="w-10 h-10" />
                </motion.span>
            </motion.div>
        </>
    );
};

export default Rotate;
