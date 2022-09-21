import next from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../styles/Home.module.scss";
import { InferGetStaticPropsType, NextPage } from "next";
import { BlogData } from "../types/BlogData.type";

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
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
