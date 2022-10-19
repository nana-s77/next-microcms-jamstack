import styles from "./h2.module.scss";

type Props = {
  text: string;
};

export const H2 = (props: Props) => {
  const { text } = props;
  return <h2 className={styles.head}>{text}</h2>;
};
