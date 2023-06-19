// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "./Contact.module.css";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
//     if (!nameRegex.test(name)) {
//       toast.error("Please enter a valid name with only letters");
//       return;
//     }

//     const emailRegex = /\S+@\S+\.\S+/;
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     setName("");
//     setEmail("");
//     setMessage("");

//     toast.success("Thank you, your message has been sent successfully");
//   };

//   return (
//     <section className={styles.connection} id="contact">
//       <div className={styles.container}>
//         <h2 className={`${styles.title} ${styles["connection__title"]}`}>
//           Get in Touch
//         </h2>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="NAME"
//             value={name}
//             onChange={handleNameChange}
//           />
//           <input
//             type="text"
//             placeholder="EMAIL"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <textarea
//             placeholder="YOUR MESSAGE"
//             value={message}
//             onChange={handleMessageChange}
//           ></textarea>
//           <button type="submit">SEND</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-Я\s]+$/;
    if (!nameRegex.test(name)) {
      toast.error("Please enter a valid name with only letters");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");

    toast.success("Thank you, your message has been sent successfully");
    window.location.href = "#home";
  };

  return (
    <section className={styles.connection} id="contact">
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles["connection__title"]}`}>
          Get in Touch
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="EMAIL"
            value={email}
            onChange={handleEmailChange}
          />
          <textarea
            placeholder="YOUR MESSAGE"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
