import React, { useEffect } from "react";
import logo from "../../assets/images/1.jpg";
import { getRandomColor } from "../RandomColor";
export default function AdvertismentCard() {
  const CardColorRef = React.useRef();
  useEffect(() => {
    const intervalId = setInterval(() => {
      SetColor(CardColorRef);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function SetColor(CardColorRef) {
    const colorsCard = getRandomColor(4);
    if (CardColorRef.current) {
      CardColorRef.current.style.border = `2px solid ${colorsCard}`;
      CardColorRef.current.style.transition = "4s";
    }
  }

  return (
    <div className={`grid-item`}>
      <div className="customCard_Adv" ref={CardColorRef}>
        <div className="custom-card">
          <img alt="alt image" src={logo} className={`Adv_Image`} />
          <div className="BoxTitle">
            <span>كارمند مركز تماس</span>
            <span>پرداخت الكترونیك پاسارگاد</span>
          </div>
        </div>
        <div className="InlineDeatails">
          <span>تهران</span>
          <span>توافقی</span>
          <span>تمام وقت</span>
        </div>
        <div className={`pt-4`}>
          <button className="custom__ButtonCard">اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
}
