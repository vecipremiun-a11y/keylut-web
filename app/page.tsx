const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.barberkeylut.app";

const benefits = [
  {
    title: "Agenda desde la app",
    text: "Reserva tu corte en segundos y escoge el horario que mejor se acomode a tu dia.",
  },
  {
    title: "Acumula tus cortes",
    text: "Cada visita cuenta. Lleva el control de tu progreso desde tu telefono.",
  },
  {
    title: "Gana recompensas",
    text: "Completa 8 cortes y recibe 1 corte premium gratis en Keylut.",
  },
];

const steps = [
  "Descarga la app de Keylut.",
  "Agenda tu cita y visita la barberia.",
  "Acumula 8 cortes y reclama tu recompensa.",
];

const barbers = [
  {
    name: "Charly",
    role: "Cortes clasicos y modernos",
    description: "Precision, detalle y estilo para que salgas listo para cualquier ocasion.",
  },
  {
    name: "Jose",
    role: "Fade y perfilado",
    description: "Degradados limpios, contornos definidos y acabado profesional.",
  },
  {
    name: "Smith",
    role: "Barba y cuidado personal",
    description: "Arreglo de barba, lineas elegantes y una experiencia relajada.",
  },
  {
    name: "Dani",
    role: "Estilo personalizado",
    description: "Te ayuda a encontrar el corte que mejor combina con tu rostro y tu estilo.",
  },
  {
    name: "Jeison",
    role: "Diseños y freestyle",
    description: "Lineas, figuras y detalles creativos para un corte que no pasa desapercibido.",
  },
  {
    name: "David",
    role: "Cortes urbanos",
    description: "Tendencias actuales con acabado limpio para renovar tu look.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Navegacion principal">
          <a className="brand" href="#inicio" aria-label="Keylut inicio">
            <img
              className="brand-logo"
              src="/keylut-logo.png"
              alt="Logo de Keylut"
            />
            <span>
              <strong>Keylut</strong>
              <small>Barber Shop</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#barberos">Barberos</a>
            <a href="#beneficios">Beneficios</a>
            <a href="#lealtad">Lealtad</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="hero-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Nueva app de barberia</p>
            <h1>
              <span className="title-white">Tu estilo.</span>
              <span className="title-gold">Nuestra</span>
              <span className="title-gold">pasion.</span>
            </h1>
            <p className="hero-text">
              Descarga la app de Keylut, agenda tu cita en segundos y acumula
              tus cortes para ganar recompensas exclusivas.
            </p>
            <div className="hero-actions">
              <a
                className="play-button"
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Descargar Barber Keylut en Google Play"
              >
                <svg
                  className="play-logo"
                  viewBox="0 0 24 26"
                  aria-hidden="true"
                >
                  <path
                    fill="#00d7fe"
                    d="M1.2 0.6C0.9 0.9 0.7 1.4 0.7 2v22c0 0.6 0.2 1.1 0.5 1.4L13.6 13z"
                  />
                  <path
                    fill="#00f076"
                    d="M17.7 8.9L13.6 13 1.2 0.6c0.4-0.4 1.1-0.5 1.9-0.1z"
                  />
                  <path
                    fill="#ffc900"
                    d="M22.1 11.4l-4.4-2.5-4.1 4.1 4.1 4.1 4.4-2.5c1.3-0.7 1.3-2.5 0-3.2z"
                  />
                  <path
                    fill="#ff3a44"
                    d="M13.6 13L1.2 25.4c0.4 0.4 1.1 0.5 1.9 0.1l14.6-8.4z"
                  />
                </svg>
                <span className="play-text">
                  <small>Disponible en</small>
                  <strong>Google Play</strong>
                </span>
              </a>
              <a
                className="button secondary"
                href="https://wa.me/56950225491"
                target="_blank"
                rel="noreferrer"
              >
                Contactar WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              className="loyalty-image"
              src="/keylut-loyalty-card-cropped.png"
              alt="Tarjeta de lealtad de Keylut Barber Shop"
            />
          </div>
        </div>
      </section>

      <section className="barbers-section" id="barberos">
        <div className="section-heading">
          <p className="eyebrow">Nuestro equipo</p>
          <h2>Elige tu barbero y reserva desde la app</h2>
          <p>
            En Keylut cada corte se trabaja con detalle, puntualidad y estilo.
            Muy pronto podras seleccionar tu barbero favorito al agendar.
          </p>
        </div>

        <div className="barbers-grid">
          {barbers.map((barber, index) => (
            <article className="barber-card" key={barber.name}>
              <div className="barber-photo">
                <img src="/keylut-logo.png" alt="" aria-hidden="true" />
              </div>
              <div className="barber-number">0{index + 1}</div>
              <h3>{barber.name}</h3>
              <strong>{barber.role}</strong>
              <p>{barber.description}</p>
              <a href="#contacto">Agendar cita</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="beneficios">
        <p className="eyebrow">Mas que una cita</p>
        <h2>Agenda, acumula y gana desde tu celular</h2>
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="icon" aria-hidden="true">
                *
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="lealtad">
        <div>
          <p className="eyebrow">Recompensa la constancia</p>
          <h2>Convierte cada corte en una razon para volver</h2>
          <p>
            La tarjeta digital de Keylut ayuda a tus clientes a ver su avance,
            recordar su proxima visita y emocionarse por completar su premio.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-content">
          <div className="contact-copy">
            <p className="eyebrow">Ubicacion y contacto</p>
            <h2>Agenda tu visita a Keylut</h2>
            <p>
              Encuentranos en Thompson 742, Iquique. Escribenos por WhatsApp
              para consultar horarios disponibles, resolver dudas o reservar tu
              proximo corte.
            </p>
          </div>

          <div className="contact-details" aria-label="Datos del local">
            <div>
              <small>Direccion</small>
              <strong>Thompson 742, Iquique</strong>
            </div>
            <div>
              <small>WhatsApp</small>
              <strong>+56 9 5022 5491</strong>
            </div>
          </div>

          <div className="contact-actions" aria-label="Opciones de contacto">
            <a
              className="contact-button primary-contact"
              href="https://wa.me/56950225491"
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
            </a>
            <a
              className="contact-button"
              href="https://www.google.com/maps/search/?api=1&query=Thompson%20742%20Iquique"
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="map-card">
          <iframe
            title="Mapa de Keylut Barber Shop en Thompson 742, Iquique"
            src="https://www.google.com/maps?q=Thompson%20742%2C%20Iquique&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
