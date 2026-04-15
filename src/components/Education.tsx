import UPCHiapas1x from "../assets/images/upchiapas_1x.webp";
import UPCHiapas2x from "../assets/images/upchiapas.webp";
import "../styles/Education.css"

export const Education = () => {
  return (
    <section className="education-section">
      <h2>Formación académica</h2>

      <div className="education-container">
        <img src={UPCHiapas1x} srcSet={`${UPCHiapas1x} 1x, ${UPCHiapas2x} 2x`} width={135} height={135} alt="Logo de UPCHiapas" loading="lazy"/>
        <div className="college-info">
          <h2>Ingeniería en Desarrollo de Software</h2>
          <h3>Universidad Politécnica de Chiapas</h3>
          <p>Septiembre 2019 - Diciembre 2022</p>
        </div>
      </div>
    </section>
  );
};