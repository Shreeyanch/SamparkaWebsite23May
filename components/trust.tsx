import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "./trust.module.css";

const Trust: NextPage = () => {
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
    <div className={styles.trust} data-animate-on-scroll>
      <div className={styles.trusttitle}>
        <div className={styles.trustedByMoreContainer}>
          <span>{`Trusted by more than a `}</span>
          <span className={styles.span}>1000</span>
          <span> businesses</span>
        </div>
      </div>
      <div className={styles.trustlogos}>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/287@2x.png" />
            <img className={styles.icon1} alt="" src="/288@2x.png" />
            <img className={styles.icon} alt="" src="/289@2x.png" />
            <img className={styles.icon} alt="" src="/290@2x.png" />
          </div>
          <div className={styles.group}>
            <img className={styles.icon} alt="" src="/291@2x.png" />
            <img className={styles.icon} alt="" src="/292@2x.png" />
            <img className={styles.icon} alt="" src="/293@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
