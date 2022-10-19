import styles from "./hashTagLabel.module.scss";
import Link from "next/link";

type Props = {
  text: string;
  linkUrl: string;
};

export const HashTagLabel = (props: Props) => {
  const { text, linkUrl } = props;
  return (
    <Link href={linkUrl}>
      <a href="#">
        <p className={styles.label}>{text}</p>
      </a>
    </Link>
  );
};
