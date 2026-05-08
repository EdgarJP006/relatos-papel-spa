import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      <section className="landing-hero">
        <div className="landing-hero-box">
          <h1>Bienvenido a Relatos de Papel</h1>
          <p>
            Un espacio para consultar libros, revisar informacion de cada titulo y acceder al catalogo de la editorial.
          </p>

          <Link to="/home" className="landing-catalog-link">
            Ir al catalogo
          </Link>
        </div>
      </section>

      <section className="landing-offers">
        <h2>Ofertas</h2>

        <div className="landing-offers-grid">
          <article className="landing-offer-card">
            <h3>Oferta 1</h3>
            <p>Espacio disponible para promocion de libros destacados.</p>
          </article>

          <article className="landing-offer-card">
            <h3>Oferta 2</h3>
            <p>Espacio disponible para descuentos o novedades editoriales.</p>
          </article>

          <article className="landing-offer-card">
            <h3>Oferta 3</h3>
            <p>Espacio disponible para anuncios breves dentro del inicio.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Landing
