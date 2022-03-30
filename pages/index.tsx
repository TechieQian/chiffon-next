import type { NextPage } from "next";
import Body from "../components/body/Body";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <Body className={styles.home}>
      <p className="content">
        My name is Charlotte Chiffon but everyone calls me Chiffon! I was born
        in June, 2018 and am living the dream in my forever home in New York
        City. I love to dance for treats and accompany my mommy to the dance
        studio to watch her dance too. I also love cooking with my mommy at
        home! I have fun playing dress up at home and dreaming of being a
        princess.
      </p>
      <p className="content">
        Check out some of my favorite videos!
        <ul>
          <li>
            <a
              target={"_blank"}
              href="https://www.instagram.com/chiffonthemaltipoo/guide/this-or-that-fashion-and-favorites/17883515288311498"
            >
              This or that
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href="https://www.instagram.com/chiffonthemaltipoo/guide/get-ready-with-me/17954515507677709/"
            >
              Get ready with me
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              href="https://www.instagram.com/chiffonthemaltipoo/guide/how-i-organize-my-closet/17972314555482986/"
            >
              Organization
            </a>
          </li>
        </ul>
      </p>
    </Body>
  );
};

export default Home;
