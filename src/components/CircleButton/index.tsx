import styles from "./circleButton.module.scss";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imageSrc: string;
  text: string;
  linkUrl: string;
  altText: string;
};


export const CircleButton = (props: Props) => {
  const { imageSrc, text, linkUrl, altText } = props;
  return (
    <Link href={linkUrl}>
      <a className={styles.circleButton} href="#">
        <div className={styles.imageWrap}>
          <Image
            src={imageSrc}
            width={107}
            height={65}
            layout='responsive'
            objectFit='contain'
            alt={altText}
          />
          <p className={styles.text}>{text}</p>
        </div>
      </a>
    </Link>
  );
};
