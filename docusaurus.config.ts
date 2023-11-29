import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
    title: "Saturn Tutorial",
    tagline:
        "Create and Update Smart Contracts and NFTs on the Cardano Blockchain!",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://docs.saturnnft.io/",
    //url: "https://orion-crypto.github.io/",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    // baseUrl: "/SaturnDocs/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Orion-Crypto", // Usually your GitHub org/user name.
    projectName: "SaturnDocs", // Usually your repo name.
    deploymentBranch: "deploy",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Plugins
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    // i18n: {
    //     defaultLocale: "en",
    //     locales: ["en"],
    // },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Saturn",
            logo: {
                alt: "Saturn Logo",
                src: "img/Logo.png",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Tutorial",
                },
                {
                    href: "/docs/api-documentation",
                    position: "left",
                    label: "API",
                },
                {
                    href: "https://github.com/Orion-Crypto/Saturn-V2-Integration",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //     {
            //         title: "Docs",
            //         items: [
            //             {
            //                 label: "Tutorial",
            //                 to: "/docs/intro",
            //             },
            //         ],
            //     },
            //     {
            //         title: "Community",
            //         items: [
            //             {
            //                 label: "Stack Overflow",
            //                 href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //             },
            //             {
            //                 label: "Discord",
            //                 href: "https://discordapp.com/invite/docusaurus",
            //             },
            //             {
            //                 label: "Twitter",
            //                 href: "https://twitter.com/docusaurus",
            //             },
            //         ],
            //     },
            //     {
            //         title: "More",
            //         items: [
            //             {
            //                 label: "Blog",
            //                 to: "/blog",
            //             },
            //             {
            //                 label: "GitHub",
            //                 href: "https://github.com/facebook/docusaurus",
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Saturn`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
