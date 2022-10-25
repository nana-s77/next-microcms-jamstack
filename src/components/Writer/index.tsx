import styles from "./writer.module.scss";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  job: string;
};

export const Writer = (props: Props) => {
  const { image, name, job } = props;
  return (
    <div className={styles.writer}>
      <div className={styles.image}>
        <Image src={`${image}`} width={75} height={100} alt={`${name}`} />
      </div>
      <div className={styles.textWrap}>
        <p>{name}</p>
        <p>{job}</p>
      </div>
    </div>
  );
};
