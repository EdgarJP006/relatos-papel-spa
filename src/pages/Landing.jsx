import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      {/* HERO */}
      <section className="landing-hero">
        <div className="landing-overlay">
          <div className="landing-hero-box">
            <h1>Bienvenido a Relatos de Papel</h1>

            <p>
              Descubre historias increíbles, explora nuestro catálogo y encuentra
              tu próxima lectura favorita.
            </p>

            <Link to="/home" className="landing-catalog-link">
              Explorar catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="landing-offers">
        <h2>Libros Destacados</h2>

        <div className="landing-offers-grid">
          <article className="landing-offer-card">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Libro destacado"
            />

            <div className="card-content">
              <h3>Ficción Moderna</h3>
              <p>
                Historias contemporáneas llenas de emoción y personajes memorables.
              </p>
            </div>
          </article>

          <article className="landing-offer-card">
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
              alt="Biblioteca"
            />

            <div className="card-content">
              <h3>Nuevas Colecciones</h3>
              <p>
                Descubre las últimas novedades editoriales y títulos exclusivos.
              </p>
            </div>
          </article>

          <article className="landing-offer-card">
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
              alt="Lectura"
            />

            <div className="card-content">
              <h3>Promociones</h3>
              <p>
                Encuentra descuentos especiales y libros recomendados para ti.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Landing