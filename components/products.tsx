import type { NextPage } from "next";
import { useState, useCallback } from "react";
import GiftPopUp from "./gift-pop-up";
import PortalPopup from "./portal-popup";
import BusinessCardPopUp from "./business-card-pop-up";
import GoogleReviewPopUp from "./google-review-pop-up";
import styles from "./products.module.css";

const Products: NextPage = () => {
  const [isGiftPopUpOpen, setGiftPopUpOpen] = useState(false);
  const [isBusinessCardPopUpOpen, setBusinessCardPopUpOpen] = useState(false);
  const [isGoogleReviewPopUpOpen, setGoogleReviewPopUpOpen] = useState(false);

  const openGiftPopUp = useCallback(() => {
    setGiftPopUpOpen(true);
  }, []);

  const closeGiftPopUp = useCallback(() => {
    setGiftPopUpOpen(false);
  }, []);

  const openBusinessCardPopUp = useCallback(() => {
    setBusinessCardPopUpOpen(true);
  }, []);

  const closeBusinessCardPopUp = useCallback(() => {
    setBusinessCardPopUpOpen(false);
  }, []);

  const openGoogleReviewPopUp = useCallback(() => {
    setGoogleReviewPopUpOpen(true);
  }, []);

  const closeGoogleReviewPopUp = useCallback(() => {
    setGoogleReviewPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.products} data-scroll-to="products">
        <div className={styles.productframe}>
          <div className={styles.productdetails}>
            <div className={styles.producttitle}>
              <div className={styles.ourLineOf}>Our line of products</div>
            </div>
            <div className={styles.productsubtitle}>
              <div className={styles.heresWhatWere}>
                Here’s what we’re building to help businesses deliver amazing
                customer experiences.
              </div>
            </div>
          </div>
          <div className={styles.productscards}>
            <div className={styles.column1}>
              <div className={styles.productcard1}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="/cardimage@2x copy.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.giftStand}>Gift Stand</div>
                    <button
                      className={styles.viewMore1}
                      onClick={openGiftPopUp}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.productcard1}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="/cardimage1@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.businessCard}>Business Card</div>
                    <button
                      className={styles.viewMore1}
                      onClick={openBusinessCardPopUp}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.productcard1}>
                <img
                  className={styles.cardimageIcon}
                  alt=""
                  src="/cardimage@2x.png"
                />
                <div className={styles.text}>
                  <div className={styles.titles}>
                    <div className={styles.businessCard}>Review Stand</div>
                    <button
                      className={styles.viewMore1}
                      onClick={openGoogleReviewPopUp}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isGiftPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGiftPopUp}
        >
          <GiftPopUp onClose={closeGiftPopUp} />
        </PortalPopup>
      )}
      {isBusinessCardPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeBusinessCardPopUp}
        >
          <BusinessCardPopUp onClose={closeBusinessCardPopUp} />
        </PortalPopup>
      )}
      {isGoogleReviewPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGoogleReviewPopUp}
        >
          <GoogleReviewPopUp onClose={closeGoogleReviewPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Products;
