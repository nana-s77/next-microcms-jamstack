import { Header } from "../../Header";
import { ReactNode } from "react";
import styles from "./normalLayout.module.scss";

type Props = {
  // ref: () => void;
  inView: boolean;
  children: ReactNode;
};

export const NormalLayout = (props: Props) => {
  const { inView, children } = props;
  return (
    // layout配下のみz-indexを付与する
    <div id="layoutRoot" className={styles.layout}>
      <Header inView={inView} />
      <main>{children}</main>
      <footer></footer>
      {/* portal の要素は以下にレンダリングされる */}
    </div>
  );
};
