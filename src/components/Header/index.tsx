import styles from "./header.module.scss";
import Image from "next/image";

export const Header = (props) => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>
        <Image src="/images/logo.svg" width={230} height={105} alt="pita" />
      </p>
      <button className={styles.menu} type="button">
        <span className={styles.menuText}>メニューを開く</span>
      </button>
      <div className={styles.menuContents}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>menu1</li>
          <li className={styles.menuItem}>menu2</li>
        </ul>
      </div>
    </div>
  );
};
