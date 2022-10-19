import styles from "./hashTagHead.module.scss";

type Props = {
  text: string;
};

export const HashTagHead = (props: Props) => {
  const { text } = props;
  return <p className={styles.head}>{text}</p>;
};
