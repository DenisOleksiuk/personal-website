import React from 'react';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-950 shadow-footer dark:shadow-zinc-600 py-4 mt-8">
            <p className="text-center dark:text-white">
                © {new Date().getFullYear()} My Personal Website. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
