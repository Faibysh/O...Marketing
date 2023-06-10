import React from "react";
import styles from "./Team.module.css";
import Dmytro from "../images/team-1.jpg";
import Tetiana from "../images/team-2.jpg";
import Khrystyna from "../images/team-3.jpg";

const Team = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["team__title"]}`}>Our Team</h2>
        <div className={styles["team__items"]}>
          <div className={styles["team__item"]}>
            <img src={Dmytro} alt="Dmytro" />
            <h6 className={styles["team__name"]}>Dmytro</h6>
            <p className={styles["team__position"]}>CEO</p>
          </div>
          <div className={styles["team__item"]}>
            <img src={Tetiana} alt="Tetiana" />
            <h6 className={styles["team__name"]}>Tetiana</h6>
            <p className={styles["team__position"]}>Co-Founder</p>
          </div>
          <div className={styles["team__item"]}>
            <img src={Khrystyna} alt="Khrystyna" />
            <h6 className={styles["team__name"]}>Khrystyna</h6>
            <p className={styles["team__position"]}>Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
