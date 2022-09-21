import { client } from "../../../libs/client";
import styles from "../../../styles/Home.module.scss";
import { BlogData } from "../../types/BlogData.type";
import { BlogDataContent } from "../../types/BlogDataContent.type";
import { InferGetStaticPropsType, NextPage } from "next";

// SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data: BlogDataContent = await client.get({
    endpoint: "blog",
    contentId: id,
  });

  return {
    props: {
      blog: data,
    },
  };
};

// 動的ページを作成するときはpathを示す必要がある
export const getStaticPaths = async () => {
  const data: BlogData = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false, // false->設定していないものは404になる
  };
};

// 引数は上でreturnしたblog;data
export const BlogId = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(blog);
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
};

export default BlogId;
