import React, { useState } from "react";
import styles from "./index.module.scss";
import sponsors from "./sponsors";
import Sponsor from "../../components/body/Sponsor";
import Body from "../../components/body/Body";
import cn from "classnames";

const uniqueTags = sponsors.reduce((set, sponsor) => {
  sponsor.tags.forEach((tag) => set.add(tag));
  return set;
}, new Set());

function Shop() {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const filterSet = new Set(filteredTags);
  const allOn = filteredTags.length === 0;
  return (
    <Body>
      <section className={styles.shop}>
        <div className="tags">
          {Array.from(uniqueTags).map((tag: any) => {
            const included = filteredTags.includes(tag);
            return (
              <span
                className={cn("tag", {
                  "is-primary": included,
                })}
                onClick={() =>
                  setFilteredTags((filtered) =>
                    included
                      ? filtered.filter((t) => t !== tag)
                      : [...filtered, tag]
                  )
                }
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div className={styles.text}>
          Shop My Codes: Save money using my discount codes for toys, clothes,
          treats and other supplies!
        </div>
        {sponsors.map((sponsor) => {
          let shouldInclude = false;
          for (let i = 0; i < sponsor.tags.length; i++) {
            if (filterSet.has(sponsor.tags[i])) shouldInclude = true;
          }
          return shouldInclude || allOn ? <Sponsor sponsor={sponsor} /> : null;
        })}
      </section>
    </Body>
  );
}

export default Shop;
