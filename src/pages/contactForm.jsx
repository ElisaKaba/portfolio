import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/TON_ID_FORMULAIRE";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    // Honeypot anti-spam : si rempli, on bloque sans alerter le bot
    if (formData.website) {
      setStatus({
        loading: false,
        success: true,
        error: "",
      });
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi du message.");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });

      setStatus({
        loading: false,
        success: true,
        error: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Une erreur est survenue. Vous pouvez me contacter directement par email.",
      });
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-card">
        <p className="contact-label">Contact</p>

        <h1>Me contacter</h1>

        <p className="contact-title">Parlons de votre projet</p>

        <p className="contact-intro">
          Vous avez besoin d’un site vitrine, d’une refonte, d’une interface web ou
          simplement d’un échange autour de votre projet ? Écrivez-moi.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-field">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="subject">Sujet</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-honeypot" aria-hidden="true">
            <label htmlFor="website">Site web</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex="-1"
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <button className="contact-submit" type="submit" disabled={status.loading}>
            {status.loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>

          {status.success && (
            <p className="contact-success">Merci, votre message a bien été envoyé.</p>
          )}

          {status.error && <p className="contact-error">{status.error}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
