import WebDevelopment from "../assets/icons/services/web_development.svg";
import WebDesing from "../assets/icons/services/web_design.svg";
import Learning from "../assets/icons/services/learning.svg";
import "../styles/Services.css";

export const Services = () => {
  return (
    <section className="services-section">
      <h1>Ofrezco los siguientes servicios</h1>
      <div className="services-container">
        <article className="service-card">
          <WebDevelopment/>
          <h2>Desarrollo Web</h2>
          <p>
            Me encargaré de crear tu sitio web con las mejores prácticas de programación y perfectamente visible en todo tipo de dispositivos.
          </p>
        </article>
        <article className="service-card">
          <WebDesing/>
          <h2>Diseño Web</h2>
          <p>
            ¿Quieres una nueva imagen en la web para tu marca o negocio? Puedo hacer el diseño para  destacar y atraer más clientes.
          </p>
        </article>
        <article className="service-card">
          <Learning/>
          <h2>Clases en Línea</h2>
          <p>
            ¿Te interesa aprender sobre programación? Te enseño mediante clases 100% personalizadas que se adaptan a tus horarios.
          </p>
        </article>
      </div>
    </section>
  );
};