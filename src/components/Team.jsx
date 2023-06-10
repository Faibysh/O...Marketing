import React from "react";
import styles from "./Team.module.css";

const Team = () => {
  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["team__title"]}`}>Our Team</h2>
        <div className={styles["team__items"]}>
          <div className={styles["team__item"]}>
            <img src="images/team-1.jpg" alt="Dmytro" />
            <h6 className={styles["team__name"]}>Dmytro</h6>
            <p className={styles["team__position"]}>CEO</p>
          </div>
          <div className={styles["team__item"]}>
            <img src="images/team-2.jpg" alt="Tetiana" />
            <h6 className={styles["team__name"]}>Tetiana</h6>
            <p className={styles["team__position"]}>Co-Founder</p>
          </div>
          <div className={styles["team__item"]}>
            <img src="images/team-3.jpg" alt="Khrystyna" />
            <h6 className={styles["team__name"]}>Khrystyna</h6>
            <p className={styles["team__position"]}>Designer</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["pricing__title"]}`}>
          Pricing Plans
        </h2>
        <div className={styles["pricing__items"]}>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Basic</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>290
            </li>
            <li>1 Logo Design</li>
            <li>1 Website Design</li>
            <li>1 Domain Free</li>
            <li>3 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Starter</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>500
            </li>
            <li>2 Logo Design</li>
            <li>2 Website Design</li>
            <li>1 Domain Free</li>
            <li>6 Month License</li>
            <li>1 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
          <ul className={styles["pricing__item"]}>
            <li className={styles["pricing__item-name"]}>Professional</li>
            <li className={styles["pricing__item-num"]}>
              <sup>$</sup>1500
            </li>
            <li>3 Logo Design</li>
            <li>3 Website Design</li>
            <li>2 Domain Free</li>
            <li>12 Month License</li>
            <li>2 GB Storage</li>
            <li>
              <a className={styles["pricing__item-link"]} href="#">
                CHOOSE PLAN
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.clients}>
        <div className={styles.container}>
          <ul className={styles["clients__list"]}>
            <li>
              <img src="images/clients/1.png" alt="client1" />
            </li>
            <li>
              <img src="images/clients/2.png" alt="client2" />
            </li>
            <li>
              <img src="images/clients/3.png" alt="client3" />
            </li>
            <li>
              <img src="images/clients/4.png" alt="client4" />
            </li>
            <li>
              <img src="images/clients/5.png" alt="client5" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
