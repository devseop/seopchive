import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { INTRODUCE_PARAGRAPH } from '@site/src/constants/constants';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

const MainCopy = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.tagline} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.tagline} />
      </Head>

      <p className={styles.introText}>\ {INTRODUCE_PARAGRAPH}</p>
    </>
  );
};

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout title={`${siteConfig.title}`}>
        <main className={styles.mainContainer}>
          <MainCopy />
        </main>
      </Layout>
    </>
  );
}
