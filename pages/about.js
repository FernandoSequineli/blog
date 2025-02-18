import styles from "../styles/about.module.css";

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <section className={styles.aboutCard}>
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We are a passionate team of developers,
          writers, and designers who believe in the power of content to educate,
          inspire, and connect people worldwide. Our goal is to create a space
          where knowledge and creativity meet, bringing insightful articles,
          updates, and useful resources to our audience.
        </p>
      </section>

      <section className={styles.aboutCard}>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to empower individuals and businesses by
          providing high-quality content that educates and informs. We believe
          that knowledge should be accessible to everyone, which is why we focus
          on delivering well-researched and engaging articles. Whether you're a
          tech enthusiast, a business owner, or a curious learner, we have
          something for you.
        </p>
      </section>

      <section className={styles.aboutCard}>
        <h2>Meet the Team</h2>
        <p>
          Our team consists of experienced professionals from diverse
          backgrounds. We bring together expertise in technology, writing,
          design, and business to create meaningful content. With a shared
          vision of making information more accessible, we are committed to
          delivering engaging and insightful articles that add value to our
          readers.
        </p>
      </section>

      <section className={styles.aboutCard}>
        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Reach out
          to us at
          <a href="mailto:info@example.com"> info@example.com</a> and let’s
          start a conversation. Whether it's feedback, collaboration
          opportunities, or just a simple hello, we're here to connect.
        </p>
      </section>
    </main>
  );
}
