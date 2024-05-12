import type { NextPage } from "next";
import { useState, useCallback } from "react";
import GiftPopUp from "./gift-pop-up";
import PortalPopup from "./portal-popup";
import styles from "./business-card-pop-up.module.css";

export type BusinessCardPopUpType = {
  onClose?: () => void;
};

const BusinessCardPopUp: NextPage<BusinessCardPopUpType> = ({ onClose }) => {
  const [isGiftPopUpOpen, setGiftPopUpOpen] = useState(false);

  const onGroupContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/samparka.nep/";
  }, []);

  const openGiftPopUp = useCallback(() => {
    setGiftPopUpOpen(true);
  }, []);

  const closeGiftPopUp = useCallback(() => {
    setGiftPopUpOpen(false);
  }, []);

  return (
    <>
      <div className={styles.businesscardpopup}>
        <img className={styles.icon} alt="" src="/11@2x.png" />
        <div className={styles.menuParent} onClick={onGroupContainerClick}>
          <div className={styles.menu} />
          <button className={styles.orderNow} onClick={openGiftPopUp}>
            ORDER NOW.
          </button>
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
    </>
  );
};

export default BusinessCardPopUp;
