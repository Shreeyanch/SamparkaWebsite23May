import type { NextPage } from "next";
import styles from "./icon-pack.module.css";

export type IconPackType = {
  /** Action props */
  onClose?: () => void;
};

const IconPack: NextPage<IconPackType> = ({ onClose }) => {
  return (
    <div className={styles.iconPack}>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={onClose}
      />
    </div>
  );
};

export default IconPack;
