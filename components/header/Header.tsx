import React from "react";
import styles from "./styles/header.module.scss";
import Image from "next/image";

function Header() {
  const placeholders = new Array(12).fill(" ");
  return (
    <section className={`${styles.hero} is-medium`}>
      <div className={`${styles.container} container`}>
        <div className={styles.brand}>
          <h1 className="title">Chiffon The Maltipoo</h1>
          <h2 className="subtitle">
            Charlotte Chiffon: A dancer and fashion model
          </h2>
          <div className={styles.icons}>
            <a
              href="https://www.instagram.com/chiffonthemaltipoo"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://vm.tiktok.com/ZMJqSoU9R/"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.facebook.com/chiffonthemaltipoo"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="mailto:chiffonthemaltipoo@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
              style={{ marginRight: "15px" }}
            >
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className={styles.gallery}>
          {placeholders.map((pic, idx) => (
            <div>
              <Image
                src={`/photos/chiffon${idx + 1}.jpg`}
                layout="responsive"
                height={200}
                width={200}
                className={styles.pic}
                key={idx}
                alt="pic"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Header;
