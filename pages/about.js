import { useQuery, gql } from "@apollo/client";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/about.module.css";

const GET_ABOUT_DATA = gql`
  query getAboutData {
    generalSettings {
      title
    }
    primaryMenuItems: menuItems(where: { location: PRIMARY }) {
      nodes {
        id
        uri
        label
      }
    }
  }
`;

export default function About() {
  const { loading, error, data } = useQuery(GET_ABOUT_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <Header
        siteTitle={data.generalSettings.title}
        menuItems={data.primaryMenuItems.nodes}
      />
      <main className={styles.aboutContainer}>
        <section className={styles.aboutCard}>
          <h1>About Us</h1>
          <p>
            Welcome to our platform! We are a passionate team of developers,
            writers, and designers who believe in the power of content to
            educate, inspire, and connect people worldwide.
          </p>
        </section>

        <section className={styles.aboutCard}>
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to empower individuals and businesses by
            providing high-quality content that educates and informs.
          </p>
        </section>

        <section className={styles.aboutCard}>
          <h2>Meet the Team</h2>
          <p>
            Our team consists of experienced professionals from diverse
            backgrounds. With a shared vision of making information more
            accessible, we are committed to delivering engaging and insightful
            content.
          </p>
        </section>

        <section className={styles.aboutCard}>
          <h2>Contact Us</h2>
          <p>
            Have questions or suggestions? We'd love to hear from you! Reach out
            to us at
            <a href="mailto:info@example.com"> info@example.com</a> and let’s
            start a conversation.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
