import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

// 動的ページを作成するときはpathを示す必要がある
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false, // false->設定していないものは404になる
  };
};

// 引数は上でreturnしたblog;data
export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: blog.body }}
      ></div>
    </main>
  );
}
