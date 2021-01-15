import React from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const { BLOG_URL, CONTENT_API_KEY } = process.env;

type Post = {
  title: string;
  slug: string;
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const blog: React.FC<{ posts: Post[] }> = (props) => {
  const { posts } = props;
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Blog page</h1>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={post.slug}>
                <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                  <a> {post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default blog;
