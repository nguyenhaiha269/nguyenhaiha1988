import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* ĐÃ THAY ĐỔI TIÊU ĐỀ CHÍNH Ở ĐÂY */}
        <h1 className="hero__title">HaiHa's Home</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            “Bạn trở thành điều mà bạn tin tưởng. Bạn đang ở đâu hôm nay trong cuộc đời mình là dựa trên tất cả những gì mà bạn đã từng tin.”
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // ĐÃ THAY ĐỔI TIÊU ĐỀ TAB VÀ THAM CHIẾU siteConfig.title Ở ĐÂY
      title={`Trang chủ HaiHa's Home`}
      description="Nơi chia sẻ kiến thức và niềm tin vào bản thân. Khám phá những điều bạn có thể đạt được.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
