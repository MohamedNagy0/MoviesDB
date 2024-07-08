/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",

            md: "768px",

            lg: "992px",

            xl: "1200px",

            "2xl": "1400px",
        },
        container: {
            center: true,
            screens: {
                sm: "640px",

                md: "720",

                lg: "960px",

                xl: "1140px",

                "2xl": "1280",
            },
        },
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "primary-color2": "var(--primary-color2)",
                "primary-color3": "var(--primary-color3)",
                "primary-bg": "var(--primary-bg)",
                "primary-bg-card1": "var(--primary-bg-card1)",
                "primary-bg-card2": "var(--primary-bg-card2)",
                "primary-bg-card3": "var(--primary-bg-card3)",
                "primary-border": "var(--border-color)",
                "primary-hover": "var(--primary-hover)",
                "primary-active": "var(--primary-active)",
                "primary-layer": "var(--primary-layer)",
            },
        },
    },
    plugins: [],
};
