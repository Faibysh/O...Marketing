import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.connection} id="contact">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["connection__title"]}`}>
          Get in Touch
        </h2>
        <form className={styles.form}>
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="EMAIL" />
          <textarea placeholder="YOUR MESSAGE"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
