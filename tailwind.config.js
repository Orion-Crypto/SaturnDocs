module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
    theme: {
        extend: {
            width: {
                "12/25": "48%",
            },
        },
    },
    plugins: [],
    darkMode: ["class", '[data-theme="dark"]'],
    corePlugins: {
        preflight: false,
    },
    blocklist: ["container"],
};
