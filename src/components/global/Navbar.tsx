import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './mode-toggle';

function Navbar() {
    return (
        <header className="sticky w-full top-0 bg-white dark:bg-neutral-950 shadow-lg dark:shadow-zinc-600 py-4 z-10">
            <div className="container mx-auto px-4 flex justify-end items-center gap-x-3">
                <nav>
                    <Link
                        href="/about"
                        className="dark:text-white hover:dark:text-white mx-2"
                    >
                        About Me
                    </Link>
                    <Link
                        href="/portfolio"
                        className="dark:text-white hover:dark:text-white mx-2"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/blog"
                        className="dark:text-white hover:dark:text-white mx-2"
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="dark:text-white hover:dark:text-white mx-2"
                    >
                        Contact
                    </Link>
                </nav>
                <ModeToggle />
            </div>
        </header>
    );
}

export default Navbar;
