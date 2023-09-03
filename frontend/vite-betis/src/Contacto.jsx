import React from "react";
import "./Contacto.css";

function Contacto () {
    return (
        <div className="contacto-container">
            <h1>CONTACTO.</h1>
            <p>
        ¡Bienvenid@ a <strong>BÉTICOS DEL NORTE</strong>! Estamos encantados de recibirte y que disfrutes con nosotros de nuestro Real Betis Balompié<div className="br"></div>
        Si tienes alguna pregunta o necesitas información adicional, no dudes en
        ponerte en contacto con nosotros a través de cualquiera de nuestros canales de comuniación:
      </p>
      <div className="contact-info">
        
        <p>
            <li>
          <strong>Dirección:</strong> Estamos en Ermua (Vizcaya) y Eibar (Gipuzkoa).
          </li>
        </p>
        <p>
            <li>
          <strong>Teléfonos:</strong>
          <br />
          Nacho: 615 431 852
          <br />
          Maikel: 635 710 185
          </li>
        </p>
        <p>
          <strong>Email:</strong> beticosdelnorte@gmail.com
        </p>
      </div>
      <div className="contact-buttons">
        <button>
          ¿Quieres hacerte socio de nuestra peña?
        </button>
        <br /><br />
        <button>
          ¡Viaja con nosotros!
        </button>
      </div>
      <p>
        No dudes en contactarnos si deseas unirte a nuestra peña o si necesitas
        más información sobre nuestros viajes y actividades. ¡Esperamos verte pronto! <br /><br />
        #BeticosDelNorte 
        #BetiBetis 
      </p>

        </div>
    );
};

export default Contacto;