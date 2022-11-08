import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../Navigation";

export const Header = (props) => {
  const menuContents: Array<{ name: string; url: string }> = [
    { name: "記事一覧", url: "/" },
    { name: "私たちについて", url: "/" },
    { name: "お問い合わせ", url: "/" },
  ];

  const { inView } = props;

  return (
    <div className={`${styles.header} ${inView || styles.sticky}`}>
      <p className={`${styles.logo} ${inView || styles.sticky}`}>
        <Image src="/images/logo.svg" width={230} height={105} alt="pita" />
      </p>
      {/* ハンバーガー */}
      <button className={styles.menu} type="button">
        <span className={styles.menuText}>メニューを開く</span>
      </button>
      <div className={styles.menuContents}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>menu1</li>
          <li className={styles.menuItem}>menu2</li>
        </ul>
      </div>
      {/* <Navigation /> */}
    </div>
  );
};
