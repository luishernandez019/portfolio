import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Contact.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const { t } = useLanguage();
  const tc = t.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const text = await response.text();
      let data: { error?: string } = {};
      try { data = JSON.parse(text); } catch { /* non-JSON server response */ }

      if (!response.ok) {
        throw new Error(data.error ?? tc.defaultError);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : tc.defaultError);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>{tc.heading}</h2>
      <p className="contact-subtitle">{tc.subtitle}</p>

      <div className="contact-card">
        {status === "success" ? (
          <div className="contact-success">
            <span className="contact-success-icon">✓</span>
            <h2>{tc.successTitle}</h2>
            <p>{tc.successText}</p>
            <button className="contact-btn" onClick={() => setStatus("idle")}>
              {tc.sendAnother}
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">{tc.nameLabel}</label>
              <input
                id="contact-name"
                type="text"
                placeholder={tc.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">{tc.emailLabel}</label>
              <input
                id="contact-email"
                type="email"
                placeholder={tc.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">{tc.messageLabel}</label>
              <textarea
                id="contact-message"
                placeholder={tc.messagePlaceholder}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-required="true"
                disabled={status === "loading"}
              />
            </div>

            {status === "error" && (
              <p className="contact-error">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="contact-btn"
              disabled={status === "loading" || !name || !email || !message}
            >
              {status === "loading" ? tc.sendingButton : tc.submitButton}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
