import type { NextPage } from "next";
import styles from "./testimonial-phone.module.css";

export type TestimonialPhoneType = {
  onClose?: () => void;
};

const TestimonialPhone: NextPage<TestimonialPhoneType> = ({ onClose }) => {
  return (
    <div className={styles.testimonialPhone}>
      <img
        className={styles.efeKurnazRncpixixooyUnsplasIcon}
        alt=""
        src="/efekurnazrncpixixooyunsplash-2@2x.png"
      />
    </div>
  );
};

export default TestimonialPhone;
