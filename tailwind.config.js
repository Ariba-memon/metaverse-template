/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-black": "#1A232E",
                "secondary-white": "#c7c7c7",
            },
            transitionTimingFunction: {
                "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
            },
        },
    },
    plugins: [],
};