import { useState } from "react";
import "../styles/Contact.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export const Contact = () => {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Error al enviar el mensaje");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Error inesperado");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Contacto</h1>
      <p className="contact-subtitle">
        Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar. ¡Escríbeme!
      </p>

      <div className="contact-card">
        {status === "success" ? (
          <div className="contact-success">
            <span className="contact-success-icon">✓</span>
            <h2>¡Mensaje enviado!</h2>
            <p>Gracias por escribirme, te responderé lo antes posible.</p>
            <button className="contact-btn" onClick={() => setStatus("idle")}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name">Nombre</label>
              <input
                id="contact-name"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input
                id="contact-email"
                type="email"
                placeholder="tu@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                placeholder="Cuéntame en qué puedo ayudarte..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
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
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
