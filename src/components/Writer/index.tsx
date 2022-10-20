import styles from "./writer.module.scss";
import Image from "next/image";

type Props = {
  image: string,
  name: string,
  job: string
}

export const Writer = (props: Props) => {
  const {image, name, job} = props;
  return (
    <div className={styles.writer}>
      <Image className={styles.image} src={`${image}`} width={75} height={100} alt={`${name}`} />
      <p className={styles.name}>{name}</p>
      <p className={styles.job}>{job}</p>
    </div>
  );
};
