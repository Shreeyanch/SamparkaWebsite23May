import type { NextPage } from "next";
import styles from "./how-to-order.module.css";

const HowToOrder: NextPage = () => {
  return (
    <div className={styles.howtoorder}>
      <div className={styles.howtoordertitle}>How to order</div>
      <div className={styles.howtoorderframe}>
        <div className={styles.step1}>
          <div className={styles.group1}>
            <div className={styles.div}>01</div>
            <div className={styles.group2}>
              <div className={styles.order}>ORDER</div>
              <div className={styles.selectAProduct}>
                Select a product and dm us on instagram . Complete the order
                process and payment.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.step2}>
          <div className={styles.group11}>
            <div className={styles.div}>02</div>
            <div className={styles.group2}>
              <div className={styles.order}>{`DESIGN & REVIEW`}</div>
              <div className={styles.chooseBetweenStandard}>
                Choose between standard or custom design and mail us your logo.
                Review the digital design proof and provide feedback.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.step2}>
          <div className={styles.group11}>
            <div className={styles.div}>03</div>
            <div className={styles.group22}>
              <div className={styles.printShip}>{`PRINT & SHIP`}</div>
              <div className={styles.afterApprovalWe}>
                After approval we will program, produce and ship your card.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
