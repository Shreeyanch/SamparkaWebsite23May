import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  const onPhoneNumber977Click = useCallback(() => {
    window.location.href = "tel:+9779843742684";
  }, []);

  const onWhatsapp977Click = useCallback(() => {
    window.open("https://wa.me/9779766387030");
  }, []);

  const onSamparkaservicesgmailcomTextClick = useCallback(() => {
    window.location.href = "mailto:samparkaservices@gmail.com";
  }, []);

  const onItemClick = useCallback(() => {
    window.open("https://www.instagram.com/samparka.nep/");
  }, []);

  const onItem1Click = useCallback(() => {
    window.open("https://wa.me/9779766387030");
  }, []);

  const onItem2Click = useCallback(() => {
    window.open(
      "https://www.facebook.com/people/Samparka-Business-Card/61556638293745/"
    );
  }, []);

  return (
    <footer className={styles.footer} data-scroll-to="footer">
      <div className={styles.footermain}>
        <img
          className={styles.letterLogo1}
          alt=""
          src="/letter-logo-1@2x.png"
        />
        <div className={styles.contactlessEligantInnovativeContainer}>
          <p className={styles.contactless}>Contactless</p>
          <p className={styles.contactless}>{`Eligant `}</p>
          <p className={styles.contactless}>Innovative</p>
        </div>
        <div className={styles.copyright}>© 2024 — Copyright</div>
      </div>
      <div className={styles.footerdescription}>
        <div className={styles.contactsParent}>
          <div className={styles.contacts}>
            <div className={styles.contactUs}>Contact us</div>
            <div className={styles.list}>
              <div
                className={styles.samparkaservicesgmailcom}
                onClick={onPhoneNumber977Click}
              >
                Phone Number: +977 9843742684
              </div>
              <div
                className={styles.samparkaservicesgmailcom}
                onClick={onWhatsapp977Click}
              >
                Whatsapp : +977 9766387030
              </div>
              <div
                className={styles.samparkaservicesgmailcom}
                onClick={onSamparkaservicesgmailcomTextClick}
              >
                samparkaservices@gmail.com
              </div>
              <div className={styles.anamnagarNepal}>Anamnagar, Nepal</div>
            </div>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.item} onClick={onItemClick}>
              <div className={styles.instagram}>Instagram</div>
            </button>
            <button className={styles.item} onClick={onItem1Click}>
              <div className={styles.whatsapp}>Whatsapp</div>
            </button>
            <button className={styles.item} onClick={onItem2Click}>
              <div className={styles.whatsapp}>Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
