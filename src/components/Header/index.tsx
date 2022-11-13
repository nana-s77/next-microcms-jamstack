import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../Navigation";
import { HamburgerButton } from "../Hamburger";
import { useState } from "react";

export const Header = (props) => {
  const menuContents: Array<{ name: string; url: string }> = [
    { name: "記事一覧", url: "/" },
    { name: "私たちについて", url: "/" },
    { name: "お問い合わせ", url: "/" },
  ];

  const {inView} = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.header} ${inView || styles.sticky}`}>
      <p className={`${styles.logo} ${inView || styles.sticky}`}>
        <Image src="/images/logo.svg" width={230} height={105} alt="pita" />
      </p>
      <HamburgerButton onClick={()=> {setOpen(!open)}} open={open} />
    </div>
  );
};
