import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import style from "../styles/front-page.module.css";

export default function Component(props) {
  const { title: siteTitle, description: siteDescription } =
    props.data.generalSettings;
  const menuItems = props.data.primaryMenuItems.nodes;

  return (
    <>
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>

      <Header
        siteTitle={siteTitle}
        siteDescription={siteDescription}
        menuItems={menuItems}
      />

      <main className={style.hero}>
        <div className={style.heroContent}>
          <h1>Welcome to {siteTitle}</h1>
          <p>{siteDescription}</p>
          <Link href="/blog" className={style.ctaButton}>
            Read Our Blog
          </Link>
        </div>
      </main>

      <section className={style.features}>
        <div className={style.featureCard}>
          <h2>Quality Content</h2>
          <p>
            We provide well-researched and engaging articles on various topics.
          </p>
        </div>
        <div className={style.featureCard}>
          <h2>Expert Team</h2>
          <p>Our team consists of skilled professionals in different fields.</p>
        </div>
        <div className={style.featureCard}>
          <h2>Stay Updated</h2>
          <p>
            Subscribe to get the latest articles and news straight to your
            inbox.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

Component.query = gql`
  ${Header.fragments.entry}
  query GetHomePage {
    ...HeaderFragment
  }
`;
