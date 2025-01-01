import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "node_modules/flowbite-react/lib/esm/**/*.js",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1100px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                'primary': "#4D7FB8",
                'prgcolor': "#39393b",
            }
        },
    },
    variants: {
        extend: {
            translate: ['responsive', 'hover'],
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
};
export default config;
