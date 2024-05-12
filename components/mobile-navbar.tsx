import type { NextPage } from "next";
import { useCallback } from "react";
import IconPack from "./icon-pack";
import styles from "./mobile-navbar.module.css";

export type MobileNavbarType = {
  onClose?: () => void;
};

const MobileNavbar: NextPage<MobileNavbarType> = ({ onClose }) => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProductClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='products']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='tutorial']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.mobilenavbar}>
      <IconPack onClose={onClose} />
      <div className={styles.mobilenavbarlogo}>
        <div className={styles.logo}>
          <img
            className={styles.letterLogo1}
            alt=""
            src="/letter-logo-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.homeParent}>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <button className={styles.product} onClick={onProductClick}>
            Product
          </button>
          <div className={styles.home} onClick={onAboutUsTextClick}>
            Tutorials
          </div>
          <div className={styles.home} onClick={onContactUsTextClick}>
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
