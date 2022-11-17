import next from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/home.module.scss";
import { InferGetStaticPropsType, NextPage } from "next";
import { BlogData } from "../types/BlogData.type";
import { Card } from "../components/Card";
import { H1 } from "../components/TextHead/H1";
import { NormalText } from "../components/Text/NormalText";
import { H2 } from "../components/TextHead/H2";
import { HashTagHead } from "../components/HashTagHead";
import { HashTagLabel } from "../components/HashTagLabel";
import { Writer } from "../components/Writer";
import { TopBorderHead } from "../components/TopBorderHead";
import { NormalLayout } from "../components/Layout/NormalLayout";
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView({
    rootMargin: "-130px", // ref要素が現れてから0px過ぎたら
  });

  return (
    <NormalLayout inView={inView}>
      <div className={styles.main}>
        {/* refを与えた要素が画面に現れるとinViewがtrueになる */}
        {/* すでに見えているのでdefaultがtrue */}
        <div ref={ref}>
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
        </div>

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
              <li key={`hashTag_${index}`} className={styles.hashTagListItem}>
                <HashTagLabel
                  text={hashTagItem.label}
                  linkUrl={hashTagItem.url}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <TopBorderHead text="書いた人" />
          <NormalText
            text="Pitaの記事はライター（Pita人）が書いています"
            weight=""
            size={14}
          />
          <ul className={styles.writersList}>
            <li>
              <Writer
                image="/images/writer/sakiyo.png"
                name="Sakiyo"
                job="社長・マーケッター"
              />
            </li>
            <li>
              <Writer
                image="/images/writer/shun.png"
                name="Shun"
                job="マーケッター"
              />
            </li>
            <li>
              <Writer
                image="/images/writer/na.png"
                name="Na"
                job="つくったひと"
              />
            </li>
          </ul>
        </section>
      </div>
    </NormalLayout>
  )
};

export default Home;
