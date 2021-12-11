import React from "react";
import { ISponsor } from "../data/sponsors";
import Coupon from "./Coupon";

interface SponsorProps {
  sponsor: ISponsor;
}

function Sponsor(props: SponsorProps) {
  const { sponsor } = props;
  const { label, link, code, subtitle = ""} = sponsor;
  return (
    <div className={`columns`}>
      <div className="column">
        <div>
          <a href={link}>{label}</a>
          <div style={{fontSize : "14px"}}>{subtitle}</div>
        </div>
      </div>
      <div className="column">{code && <Coupon text={code} />}</div>
    </div>
  );
}

export default Sponsor;
