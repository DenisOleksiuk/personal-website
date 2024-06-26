'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

export const Highlight = ({
    delay = 0.5,
    children,
    className
}: {
    delay?: number;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            initial={{
                backgroundSize: '0% 100%'
            }}
            animate={{
                backgroundSize: '100% 100%'
            }}
            transition={{
                duration: 1.5,
                ease: 'linear',
                delay
            }}
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center'
            }}
            className={cn(
                `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300`,
                className
            )}
        >
            {children}
        </motion.div>
    );
};
