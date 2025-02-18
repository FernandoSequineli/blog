import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import styles from "../styles/blog.module.css";

const GET_POSTS = gql`
  query getPosts {
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
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
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
  );
}
