import styles from "./navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

type Props = {
  // onClick: MouseEventHandler,
  open: boolean
}

export const Navigation = (props:Props) => {
  // router使う？
  const menuContents: Array<{ name: string; url: string }> = [
    { name: "記事一覧", url: "/" },
    { name: "私たちについて", url: "/" },
    { name: "お問い合わせ", url: "/" },
  ];
  const { open } = props;

  return (
    <>
      <nav className={`${styles.nav} ${open && styles.isOpen}`}>
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
    </>
  );
};
