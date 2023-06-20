import React from "react";
import styles from "./Clients.module.css";

import Intertop from "../images/clients/intertop.png";
import Vizor from "../images/clients/vizor.png";
import Cola from "../images/clients/cola.png";
import Uklon from "../images/clients/uklon.png";
import Bolt from "../images/clients/bolt.png";

const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <ul className={styles["clients__list"]}>
          <li>
            <img src={Intertop} alt="intertop" />
          </li>
          <li>
            <img src={Vizor} alt="vizor" />
          </li>
          <li>
            <img className={styles.cola} src={Cola} alt="cola" />
          </li>
          <li>
            <img src={Uklon} alt="uklon" />
          </li>
          <li>
            <img className={styles.bolt} src={Bolt} alt="bolt" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
