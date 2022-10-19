import styles from "./normalText.module.scss";

type Props = {
  text: string;
  weight: string;
  size: number;
};

/**
 * NormalTextの呼び出し
 * <NormalText
      text="sample"
      weight="bold"
      size={14}
    />
 */
export const NormalText = (props: Props) => {
  const { text, weight, size } = props;
  return (
    <p
      className={`
        ${styles.text}
        ${weight === "bold" ? styles.bold : ""}
        ${
          size === 12
            ? styles.size12
            : size === 16
            ? styles.size16
            : styles.size14
        }
      `}
    >
      {text}
    </p>
  );
};
