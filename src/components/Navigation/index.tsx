import styles from "./navigation.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Navigation = (props) => {
  const menuContents: Array<{ name: string; url: string }> = [
    { name: "記事一覧", url: "/" },
    { name: "私たちについて", url: "/" },
    { name: "お問い合わせ", url: "/" },
  ];
  return (
    <div className={styles.navWrap}>
      <p className={styles.menu}>
        <Image
          src="/images/menu.svg"
          layout="fill"
          objectFit="contain"
          alt="menu"
        />
      </p>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {menuContents.map((item, index) => (
            <li key={`${item.name}__${index}`} className={styles.listItem}>
              <Link href={item.url}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
