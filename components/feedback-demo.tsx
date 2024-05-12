import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./feedback-demo.module.css";

const FeedbackDemo: NextPage = () => {
  const onButton1Click = useCallback(() => {
    window.open("/demo-form");
  }, []);

  return (
    <div className={styles.feedbackdemo}>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.vouchers}>
        <div className={styles.downloadapp}>
          <div className={styles.filterYourReviewsParent}>
            <div className={styles.filterYourReviews}>Filter your reviews</div>
            <div className={styles.optimizeReviews45Container}>
              <p className={styles.optimizeReviews45}>
                Optimize reviews 4-5 stars lead to Google reviews, 1-3 stars
                redirect to a feedback form, saving from negative reviews.
              </p>
            </div>
          </div>
          <div className={styles.downloadappInner}>
              <button className={styles.button} onClick={onButton1Click}>
                <div className={styles.demo}>Demo</div>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDemo;
