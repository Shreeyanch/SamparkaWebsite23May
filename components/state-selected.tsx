import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./state-selected.module.css";

export type StateSelectedType = {
  iconstar?: string;

  /** Style props */
  stateSelectedBackgroundColor?: CSSProperties["backgroundColor"];
};

const StateSelected: NextPage<StateSelectedType> = ({
  iconstar,
  stateSelectedBackgroundColor,
}) => {
  const stateSelectedStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: stateSelectedBackgroundColor,
    };
  }, [stateSelectedBackgroundColor]);

  return (
    <div className={styles.stateselected} style={stateSelectedStyle}>
      <img className={styles.iconstar} alt="" src={iconstar} />
    </div>
  );
};

export default StateSelected;
