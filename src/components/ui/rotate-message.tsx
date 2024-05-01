'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import Image from 'next/image';
import { Highlight } from './highlight';

const RotateMessage = () => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

    return (
        <div className="mt-10">
            <div className="flex justify-center items-center">
                <Highlight
                    delay={2}
                    className="relative z-10 text-md md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-400 to-black dark:to-neutral-50  text-center font-sans"
                >
                    rotate the computer
                </Highlight>
            </div>
            <motion.div
                initial={{
                    rotateY: 0
                }}
                animate={{
                    rotateY: [40, 0, 40]
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
                    <MoveHorizontal size={40} color="gray" className="w-10 h-10" />
                </motion.span>
            </motion.div>
        </div>
    );
};

export default RotateMessage;
