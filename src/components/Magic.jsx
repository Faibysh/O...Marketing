import styles from "./Magic.module.css";

const Magic = () => {
  return (
    <section className={styles.magic} id="magic">
      <div className={styles.container}>
        <div className={styles["magic__inner"]}>
          <h2 className={`${styles.title} ${styles["magic__title"]}`}>
            Let’s make magic.
          </h2>
          <div className={styles["magic__text"]}>
            <p>
              Marketing agency O...Marketing: full range of marketing,
              advertising and design services in Lviv and Ukraine: marketing
              research of markets, goods, consumers, marketing complex planning,
              advertising, advertising holding advertising campaigns, branding,
              advertising design, pr.
            </p>
            <p>
              We have a lot of experience in real business, in a variety of
              industries - from real estate to pharmacy and medical business. We
              don't just solve our clients' problems, we came out of the
              business environment ourselves and and understand the essence of
              business processes.
            </p>
            <p>We speak the same language as the business!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magic;
