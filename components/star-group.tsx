import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./star-group.module.css";

export type StarGroupType = {
  iconstar?: string;
  iconstar1?: string;
  iconstar2?: string;
  iconstar3?: string;
  iconstar4?: string;

  /** Style props */
  buttonroundedBackgroundColor?: CSSProperties["backgroundColor"];
  buttonroundedBackgroundColor1?: CSSProperties["backgroundColor"];
  buttonroundedBackgroundColor2?: CSSProperties["backgroundColor"];
  buttonroundedBackgroundColor3?: CSSProperties["backgroundColor"];
};

const StarGroup: NextPage<StarGroupType> = ({
  iconstar,
  iconstar1,
  iconstar2,
  iconstar3,
  iconstar4,
  buttonroundedBackgroundColor,
  buttonroundedBackgroundColor1,
  buttonroundedBackgroundColor2,
  buttonroundedBackgroundColor3,
}) => {
  const buttonroundedStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonroundedBackgroundColor,
    };
  }, [buttonroundedBackgroundColor]);

  const buttonrounded1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonroundedBackgroundColor1,
    };
  }, [buttonroundedBackgroundColor1]);

  const buttonrounded2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonroundedBackgroundColor2,
    };
  }, [buttonroundedBackgroundColor2]);

  const buttonrounded3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonroundedBackgroundColor3,
    };
  }, [buttonroundedBackgroundColor3]);

  return (
    <div className={styles.starGroup}>
      <div className={styles.buttonrounded} style={buttonroundedStyle}>
        <img className={styles.iconstar} alt="" src={iconstar} />
      </div>
      <div className={styles.buttonrounded} style={buttonrounded1Style}>
        <img className={styles.iconstar} alt="" src={iconstar1} />
      </div>
      <div className={styles.buttonrounded} style={buttonrounded2Style}>
        <img className={styles.iconstar} alt="" src={iconstar2} />
      </div>
      <div className={styles.buttonrounded} style={buttonrounded3Style}>
        <img className={styles.iconstar} alt="" src={iconstar3} />
      </div>
      <div className={styles.buttonrounded}>
        <img className={styles.iconstar} alt="" src={iconstar4} />
      </div>
    </div>
  );
};

export default StarGroup;
