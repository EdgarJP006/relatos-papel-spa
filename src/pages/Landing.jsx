import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      <section>
        <h1>Relatos de Papel</h1>

        <p>
          Plataforma web para la consulta, exploracion y compra de libros de una editorial digital.
        </p>

        <div className="landing-actions">
          <Link to="/home">Explorar catalogo</Link>
          <Link to="/login">Iniciar sesion</Link>
        </div>
      </section>

      <section>
        <h2>Partes del sitio</h2>

        <p>
          La plataforma se organiza en modulos claros para cubrir consulta, compra y gestion del usuario.
        </p>

        <div className="landing-sections">
          <article className="landing-section-card">
            <span>Catalogo</span>
            <h3>Exploracion de libros</h3>
            <p>Vista principal para consultar el catalogo editorial disponible.</p>
          </article>

          <article className="landing-section-card">
            <span>Busqueda</span>
            <h3>Filtro por titulo</h3>
            <p>Permite localizar libros de forma rapida a partir del nombre.</p>
          </article>

          <article className="landing-section-card">
            <span>Detalle</span>
            <h3>Ficha individual</h3>
            <p>Muestra la informacion completa de cada libro antes de agregarlo.</p>
          </article>

          <article className="landing-section-card">
            <span>Compra</span>
            <h3>Carrito persistente</h3>
            <p>Conserva la seleccion del usuario durante la navegacion en el sitio.</p>
          </article>

          <article className="landing-section-card">
            <span>Usuario</span>
            <h3>Perfil y pedidos</h3>
            <p>Area personal para revisar datos de cuenta e historial reciente.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Landing
