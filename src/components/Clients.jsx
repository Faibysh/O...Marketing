import React from "react";
import styles from "./Clients.module.css";

import Client1 from "../images/clients/1.png";
import Client2 from "../images/clients/2.png";
import Client3 from "../images/clients/3.png";
import Client4 from "../images/clients/4.png";
import Client5 from "../images/clients/5.png";

const Clients = () => {
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <ul className={styles["clients__list"]}>
          <li>
            <img src={Client1} alt="client1" />
          </li>
          <li>
            <img src={Client2} alt="client2" />
          </li>
          <li>
            <img src={Client3} alt="client3" />
          </li>
          <li>
            <img src={Client4} alt="client4" />
          </li>
          <li>
            <img src={Client5} alt="client5" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
