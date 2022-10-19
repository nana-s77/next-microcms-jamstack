import next from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import { InferGetStaticPropsType, NextPage } from "next";
import { BlogData } from "../types/BlogData.type";
import { Card } from "../components/Card";
import { H1 } from "../components/TextHead/H1";
import { NormalText } from "../components/Text/NormalText";
import { Header } from "../components/Header";
import { H2 } from "../components/TextHead/H2";
import { HashTagHead } from "../components/HashTagHead";
import { HashTagLabel } from "../components/HashTagLabel";

// SSG
// getStaticProps自体には型アノテーションをつけない
export const getStaticProps = async () => {
  const data: BlogData = await client.get({ endpoint: "blog" });
  console.log(data.contents[0].image);
  return {
    props: {
      blog: data.contents,
    },
  };
};

const Home: NextPage = ({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // todo: CMSから取ってこれる？
  const hashTagList = [
    {
      label: "すべて",
      url: "#",
    },
    {
      label: "丁寧に暮す",
      url: "#",
    },
    {
      label: "知るを楽しむ",
      url: "#",
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <H1 text="毎日を少しだけいいものに" />
      <NormalText
        text="ピンときたことにちょっとだけ丁寧に反応してみて"
        weight="bold"
        size={14}
      />
      <NormalText
        text="心にピタッとくるものがみつかるかも"
        weight="bold"
        size={14}
      />

      <section className={styles.section}>
        <H2 text="最新記事" />
        <ul className={styles.posts}>
          {blog.map((blogItem) => (
            <li key={blogItem.id}>
              <Link href={`blog/${blogItem.id}`}>
                <a href="#">
                  <Card
                    title={blogItem.title}
                    date={blogItem.publishedAt}
                    tags={blogItem.tags.map((tag) => tag.tagName)}
                    imageSrc={blogItem.image ? blogItem.image.url : ""}
                  ></Card>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <HashTagHead text="記事一覧へ" />
        <ul className={styles.hashTagList}>
          {hashTagList.map((hashTagItem, index) => (
            <li key={`hashTag_${index}`}>
              <HashTagLabel
                text={hashTagItem.label}
                linkUrl={hashTagItem.url}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
