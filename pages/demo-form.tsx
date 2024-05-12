import type { NextPage } from "next";
import { useCallback } from "react";
import Modal from "../components/modal";
import styles from "./demo-form.module.css";

const DemoForm: NextPage = () => {
  const onLETTERLOGO2Click = useCallback(() => {
    window.open("https://www.samparka.info/");
  }, []);

  return (
    <div className={styles.demoForm}>
      <div className={styles.image12Parent}>
        <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
        <div className={styles.razeTech}>Raze Tech</div>
        <div className={styles.modalWrapper}>
          <Modal />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.poweredByParent}>
            <div className={styles.poweredBy}>powered by</div>
            <img
              className={styles.letterLogo2}
              alt=""
              src="/letter-logo-2@2x.png"
              onClick={onLETTERLOGO2Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
