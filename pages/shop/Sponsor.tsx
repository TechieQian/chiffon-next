import React from "react";
import { ISponsor } from "../../sponsors";
import Coupon from "../../components/body/Coupon";

interface SponsorProps {
  sponsor: ISponsor;
}

function Sponsor({ sponsor }: SponsorProps) {
  if (!sponsor) return null;
  const { label, link, code, subtitle = "" } = sponsor;
  return (
    <div className={`columns`}>
      <div className="column">
        <div>
          <a target="_blank" href={link}>
            {label}
          </a>
          <div style={{ fontSize: "14px" }}>{subtitle}</div>
        </div>
      </div>
      <div className="column">{code && <Coupon text={code} />}</div>
    </div>
  );
}

export default Sponsor;
