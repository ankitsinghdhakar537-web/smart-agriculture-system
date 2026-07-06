import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      <h2>📞 Contact Us</h2>

      <p>
        Have questions about Smart Agriculture?
      </p>

      <div className="contact-box">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button>
          Send Message
        </button>

      </div>

    </section>
  );
}

export default Contact;