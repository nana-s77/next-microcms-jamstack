import { H2 } from "../TextHead/H2";
import styles from "./topBorderHead.module.scss";

type Props = {
  text: string;
};

export const TopBorderHead = (props: Props) => {
  const { text } = props;
  return (
    <div className={styles.wrap}>
      <H2 text={text} />
    </div>
  );
};
