/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                offWhite: '#FAFAFA', // Slightly brighter off-white
                heading: '#111111', // Darker, sharper black
                body: '#333333', // Darker gray for better contrast
                lightGray: '#999999',
                divider: '#EAEAEA',
                cardBorder: '#EDEDED',
                primary: {
                    DEFAULT: '#000000', // Luxury often uses black as primary accent
                    hover: '#333333',
                    light: '#F5F5F5',
                },
                accent: '#3BB5FD', // Keep blue only for very specific highlights
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
                display: ['"Playfair Display"', 'serif'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0em',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.25em', // Editorial look
            },
        },
    },
    plugins: [],
}
