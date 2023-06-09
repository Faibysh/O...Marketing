const Contact = () => {
  return (
    <section className="connection" id="contact">
      <div className="container">
        <h2 className="title connection__title">Get in Touch</h2>
        <form className="form">
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
