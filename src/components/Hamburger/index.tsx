import styles from "./hamburgerButton.module.scss";
import { MouseEventHandler, useEffect } from "react";
import { Navigation } from "../Navigation";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Portal } from "../Portal";


type Props = {
  onClick: MouseEventHandler,
  open: boolean
}

export const HamburgerButton = (props:Props) => {
  const { onClick, open } = props;
  const [showPortal, setShowPortal] = useState(false);
  
  useEffect(() => {
    setShowPortal(true);
  }, []);

  return (
    <div>
      <button 
        className={`${styles.menu} ${open && styles.isOpen}`} 
        type="button" 
        onClick={onClick}
        aria-expanded={open}
      >
        <span className={`${styles.menuText} ${open && styles.isOpen}`}>メニューを開く</span>
      </button>
      <Portal>
        <button type="button" className={`${styles.overlay} ${open && styles.isOpen}`} onClick={onClick}></button>
        <Navigation open={open} />
      </Portal>
    </div>
  )
};
