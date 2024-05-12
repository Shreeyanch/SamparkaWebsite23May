import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MobileNavbar from "./mobile-navbar";
import PortalPopup from "./portal-popup";
import IconPack from "./icon-pack";
import styles from "./navbar.module.css";

export type NavbarType = {
  onClose?: () => void;
};

const Navbar: NextPage<NavbarType> = ({ onClose }) => {
  const [isMobileNavbarPopupOpen, setMobileNavbarPopupOpen] = useState(false);

  const onHomeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onProductClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='products']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProduct1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='products']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutusClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footer']");
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

  const openMobileNavbarPopup = useCallback(() => {
    setMobileNavbarPopupOpen(true);
  }, []);

  const closeMobileNavbarPopup = useCallback(() => {
    setMobileNavbarPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <img
            className={styles.letterLogo1}
            alt=""
            src="/letter-logo-1@2x.png"
          />
          <div className={styles.menuright}>
            <div className={styles.menulinks}>
              <button className={styles.home} onClick={onHomeClick}>
                HOME
              </button>
              <button className={styles.home} onClick={onProductClick}>
                PRODUCTS
              </button>
              <button className={styles.home} onClick={onProduct1Click}>
                TUTORIALS
              </button>
              <button className={styles.home} onClick={onAboutusClick}>
                CONTACT US
              </button>
              <div className={styles.navbar20}>
                <IconPack />
                <div className={styles.logoWrapper}>
                  <div className={styles.logo}>
                    <img
                      className={styles.letterLogo11}
                      alt=""
                      src="/letter-logo-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.menu}>
                  <div className={styles.homeParent}>
                    <div className={styles.aboutUs} onClick={onHomeTextClick}>
                      Home
                    </div>
                    <button className={styles.product2}>Product</button>
                    <div
                      className={styles.aboutUs}
                      onClick={onAboutUsTextClick}
                    >
                      Tutorials
                    </div>
                    <div
                      className={styles.aboutUs}
                      onClick={onContactUsTextClick}
                    >
                      Contact us
                    </div>
                    <div className={styles.signIn}>Sign in</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={styles.hamburgerIcon}
              onClick={openMobileNavbarPopup}
            >
              <img className={styles.group2Icon} alt="" src="/group2.svg" />
            </button>
          </div>
        </div>
      </div>
      {isMobileNavbarPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMobileNavbarPopup}
        >
          <MobileNavbar onClose={closeMobileNavbarPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Navbar;
