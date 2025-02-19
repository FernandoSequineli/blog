import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/blog.module.css";

const GET_BLOG_DATA = gql`
  query getBlogData {
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
    posts {
      nodes {
        title
        excerpt
        databaseId
        uri
      }
    }
  }
`;

export default function Blog() {
  const { loading, error, data } = useQuery(GET_BLOG_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <>
      <Header
        siteTitle={data.generalSettings.title}
        menuItems={data.primaryMenuItems.nodes}
      />
      <div className={styles.blogContainer}>
        {data.posts.nodes.map((post) => (
          <div key={post.databaseId} className={styles.blogCard}>
            <Link href={post.uri}>
              <h2>{post.title}</h2>
            </Link>
            <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
