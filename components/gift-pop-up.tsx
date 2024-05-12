import type { NextPage } from "next";
import { useState, useCallback } from "react";
import PortalPopup from "./portal-popup";
import styles from "./gift-pop-up.module.css";

export type GiftPopUpType = {
  onClose?: () => void;
};

const GiftPopUp: NextPage<GiftPopUpType> = ({ onClose }) => {
  const [isGiftPopUp1Open, setGiftPopUp1Open] = useState(false);

  const onGroupContainerClick = useCallback(() => {
    window.location.href = "https://www.instagram.com/samparka.nep/";
  }, []);

  const openGiftPopUp1 = useCallback(() => {
    setGiftPopUp1Open(true);
  }, []);

  const closeGiftPopUp1 = useCallback(() => {
    setGiftPopUp1Open(false);
  }, []);

  return (
    <>
      <div className={styles.giftpopup}>
        <img className={styles.giftpopupChild} alt="" src="/group-780@2x.png" />
        <div className={styles.menuParent} onClick={onGroupContainerClick}>
          <div className={styles.menu} />
          <button className={styles.orderNow} onClick={openGiftPopUp1}>
            ORDER NOW.
          </button>
        </div>
      </div>
      {isGiftPopUp1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGiftPopUp1}
        >
          <GiftPopUp onClose={closeGiftPopUp1} />
        </PortalPopup>
      )}
    </>
  );
};

export default GiftPopUp;
