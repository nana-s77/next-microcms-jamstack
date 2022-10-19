import styles from "./h1.module.scss";

type Props = {
  text: string;
};

export const H1 = (props: Props) => {
  const { text } = props;
  return <h1 className={styles.head}>{text}</h1>;
};
