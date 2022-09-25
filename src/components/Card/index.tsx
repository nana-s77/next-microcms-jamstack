import styles from "./card.module.scss";
import Image from "next/image";

const CarsWidthType = {
  SHORT: "small",
  LONG: "long",
} as const;

type CarsWidthType = typeof CarsWidthType[keyof typeof CarsWidthType];

export const Card = (props) => {
  const { title, imageSrc, tags, date } = props;
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        width={CarsWidthType.SHORT ? 272 : 343}
        height={215}
        alt=""
      ></Image>
      <p className={styles.title}>{title}</p>
      {tags ? (
        <ul className={styles.tagList}>
          {/* <li>{tags}</li> */}
          <li>{tags.map((tagName) => tagName)}</li>
        </ul>
      ) : (
        "何もないです"
      )}
    </div>
  );
};
