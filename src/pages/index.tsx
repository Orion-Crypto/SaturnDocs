import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from 'react';
import { Redirect } from '@docusaurus/router';

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        Create NFTs Tutorial - 15 min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            // title={`${siteConfig.title}`}
            description="A guide to create Smart Contracts and NFTs on the Cardano Blockchain with Saturn and CIP-68!"        >
            <Redirect to="/docs/intro" />;

            {/* Default Home Page is not longer needed */}
            {/* <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main> */}
        </Layout>
    );
}
