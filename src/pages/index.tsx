import next from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import { InferGetStaticPropsType, NextPage } from "next";
import { BlogData } from "../types/BlogData.type";
import { Card } from "../components/Card";

// SSG
// getStaticProps自体には型アノテーションをつけない
export const getStaticProps = async () => {
  const data: BlogData = await client.get({ endpoint: "blog" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

const Home: NextPage = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul className={styles.postList}>
      {blog.map((blogItem) => (
        <>
          <li key={blogItem.id}>
            <Link href={`blog/${blogItem.id}`}>
              <a href="">
                <Card
                  title={blogItem.title}
                  date={blogItem.publishedAt}
                  tags={blogItem.tags.map((tag) => tag.tagName)}
                  imageSrc={blogItem.image ? blogItem.image : "/"}
                ></Card>
              </a>
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Home;
