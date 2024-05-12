import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import styles from "./hero-section.module.css";

const HeroSection: NextPage = () => {
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

  const onButtonClick = useCallback(() => {
    window.open("https://www.instagram.com/samparka.nep/");
  }, []);

  return (
    <section
      className={styles.herosection}
      id="HeroSection"
      data-scroll-to="heroSection"
      data-animate-on-scroll
    >
      <div className={styles.herotext}>
        <div className={styles.herocta}>
          <div className={styles.newcallout}>
            <div className={styles.newcalloutChild} />
            <div className={styles.contactlessElegantInnovati}>
              Contactless. Elegant. Innovative.
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.title}>
            <p className={styles.networking}>Networking</p>
            <p className={styles.networking}>{`Re-invented `}</p>
          </div>
          <div className={styles.subtitle}>
            <p className={styles.networking}>
              For those who want to make an excellent first impression.
            </p>
            <p className={styles.networking}>
              Connect with people in a modern way.
            </p>
          </div>
          <div className={styles.buttonrow}>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.orderNow}>Order Now</div>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.heroimageIcon} alt="" src="/vector@2x.png" />
    </section>
  );
};

export default HeroSection;
