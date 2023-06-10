import styles from "./Expertise.module.css";

const Expertise = () => {
  return (
    <section className={styles.expertise} id="expertise">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["expertise__title"]}`}>
          Our Expertise
        </h2>
        <div className={styles["expertise__inner"]}>
          <div className={styles["expertise__info"]}>
            <div className={styles["expertise__info-item"]}>
              BRANDING
              <span style={{ width: "calc(100% - 90%)" }}>90%</span>
            </div>
            <div className={styles["expertise__info-item"]}>
              DESIGN
              <span style={{ width: "calc(100% - 80%)" }}>80%</span>
            </div>
            <div className={styles["expertise__info-item"]}>
              DEVELOPMENT
              <span style={{ width: "calc(100% - 85%)" }}>85%</span>
            </div>
          </div>
          <div className={styles["expertise__text"]}>
            <p>
              Internet marketing strategy includes the creation of an image and
              advertising concept, the development of content strategy,
              distribution of the use of various communication channels.
            </p>
            <p>
              Implement the adopted strategy, monitoring interim results, and
              adjusting future actions to reflect changes. The main goal in this
              process for us is the end result, not following the plans.
            </p>
          </div>
        </div>
        <div className={styles["expertise__items"]}>
          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--design"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>GRAPHIC DESIGN</h4>
            <p className={styles["expretise__item-text"]}>
              Advertising design, package design, labels, leaflets, catalogs,
              development of presentations, design of exhibition stands stands
            </p>
          </div>

          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--dev"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>WEB DEVELOPMENT</h4>
            <p className={styles["expertise__item-text"]}>
              We develop websites from concept to implementation. Design,
              layout, programming and launching the site in the network
            </p>
          </div>

          <div
            className={`${styles["expertise__item"]} ${styles["expertise__item--marketing"]}`}
          >
            <h4 className={styles["expertise__item-title"]}>MARKETING</h4>
            <p className={styles["expretise__item-text"]}>
              We develop marketing and advertising promotion of your product or
              service on a turnkey basis and on any budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
