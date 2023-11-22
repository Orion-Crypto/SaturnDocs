import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

const NFTProjects = () => {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className="bg-blue-500">
            <div className="mx-auto text-center py-24">
                <h1 className="text-4xl font-bold text-white">
                    {siteConfig.title}
                </h1>
                <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

                <div className="py-10">
                    <Link
                        className="bg-white rounded-md text-gray-500 px-4 py-2"
                        to="/docs/intro"
                    >
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NFTProjects;
