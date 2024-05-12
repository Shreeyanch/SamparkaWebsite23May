import type { NextPage } from "next";
import { useCallback } from "react";
import StateSelected from "./state-selected";
import StarGroup from "./star-group";
import styles from "./modal.module.css";

const Modal: NextPage = () => {
  const onStarRatingClick = useCallback(() => {
    window.location.href = "https://reviewthis.biz/razetech";
  }, []);

  const onStarRating1Click = useCallback(() => {
    window.location.href = "https://reviewthis.biz/razetech";
  }, []);

  const onStarRating2Click = useCallback(() => {
    window.open("/demo-form-redirect");
  }, []);

  const onStarRating3Click = useCallback(() => {
    window.open("/demo-form-redirect");
  }, []);

  const onStarRating4Click = useCallback(() => {
    window.open("/demo-form-redirect");
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.pleaseRateYour}>Please rate your experience.</div>
      <div className={styles.starRatingParent}>
        <button className={styles.starRating} onClick={onStarRatingClick}>
          <div className={styles.starGroup}>
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="unset"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
            <StateSelected
              iconstar="/iconstar.svg"
              stateSelectedBackgroundColor="rgba(123, 97, 255, 0)"
            />
          </div>
        </button>
        <button className={styles.starRating1} onClick={onStarRating1Click}>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar.svg"
            iconstar3="/iconstar.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="rgba(123, 97, 255, 0)"
          />
        </button>
        <button className={styles.starRating2} onClick={onStarRating2Click}>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="rgba(199, 195, 216, 0)"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
        <button className={styles.starRating3} onClick={onStarRating3Click}>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar.svg"
            iconstar2="/iconstar1.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="unset"
            buttonroundedBackgroundColor1="rgba(123, 97, 255, 0)"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
        <button className={styles.starRating4} onClick={onStarRating4Click}>
          <StarGroup
            iconstar="/iconstar.svg"
            iconstar1="/iconstar1.svg"
            iconstar2="/iconstar1.svg"
            iconstar3="/iconstar1.svg"
            iconstar4="/iconstar1.svg"
            buttonroundedBackgroundColor="rgba(123, 97, 255, 0)"
            buttonroundedBackgroundColor1="unset"
            buttonroundedBackgroundColor2="unset"
            buttonroundedBackgroundColor3="unset"
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
