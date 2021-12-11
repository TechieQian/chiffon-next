import React, { useRef, useState } from "react";
import styles from "./Coupon.module.scss";

interface CouponProps {
  text: string;
}
function Coupon(props: CouponProps) {
  const { text } = props;
  const [tooltipText, setTooltipText] = useState(text);
  const couponInputRef = useRef(null);
  const tooltipRef = useRef(null);

  function copyToClipboard() {
    const input = couponInputRef.current as any;
    // const tooltip = tooltipRef.current;

    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setTooltipText(`Copied ${input.value}`);
  }

  function onMouseOut() {
    setTooltipText("Copy to clipboard");
  }
  return (
    <div
      className={styles.coupon}
      onMouseOut={onMouseOut}
      onClick={copyToClipboard}
    >
      <div className={styles.tooltip}>
        <span ref={tooltipRef} className={styles.tooltiptext} id="myTooltip">
          {tooltipText}
        </span>
      </div>

      <i className="far fa-clipboard" style={{ marginRight: "15px" }}></i>
      <input readOnly value={text} ref={couponInputRef} />
    </div>
  );
}

export default Coupon;
