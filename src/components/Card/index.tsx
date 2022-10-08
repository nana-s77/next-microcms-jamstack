import styles from "./card.module.scss";
import Image from "next/image";

const CarsWidthType = {
  SHORT: "small",
  LONG: "long",
} as const;

type CarsWidthType = typeof CarsWidthType[keyof typeof CarsWidthType];

export const Card = (props) => {
  const { title, date, imageSrc, tags } = props;
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc.src ? imageSrc.src : "/images/nophoto.png"}
        width={CarsWidthType.LONG ? 343 : ""}
        height={215}
        alt=""
        className={styles.image}
      ></Image>
      <div className={styles.textArea}>
        <div className={styles.textAreaHeder}>
          {tags ? (
            <ul className={styles.tagList}>
              {tags.map((tagName, index) => (
                <li className={styles.tagItem} key={`tag__${index}`}>
                  #{tagName}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
          {/* todo:日付操作 */}
          {/* <p className={styles.date}>{date}</p> */}
        </div>

        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
