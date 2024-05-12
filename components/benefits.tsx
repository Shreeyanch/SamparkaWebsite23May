import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./benefits.module.css";

const Benefits: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.benefits} data-animate-on-scroll>
      <div className={styles.benefitsframe}>
        <div className={styles.benefitone}>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <div className={styles.title}>Reduce Waste</div>
          <div className={styles.description}>
            Limit your carbon footprint by reducing your reliance on paper — and
            look good doing it.
          </div>
        </div>
        <div className={styles.benefitone}>
          <img
            className={styles.a19ada006bf9011562397Group44Icon}
            alt=""
            src="/629a19ada006bf9011562397-group-448-1-1@2x.png"
          />
          <div className={styles.title1}>Device Support</div>
          <div className={styles.description1}>
            <p className={styles.worksOnAll}>
              Works on all smartphones running both Android or iOS.
            </p>
          </div>
        </div>
        <div className={styles.benefitone}>
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          <div className={styles.title1}>Gain An Edge</div>
          <div className={styles.description2}>
            Impress potential customers, clients and partners with the latest in
            networking technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
