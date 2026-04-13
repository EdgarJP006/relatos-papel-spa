import { Link } from 'react-router-dom'

function Landing() {
  return (
    <main className="landing">
      <section>
        <h1>Relatos de Papel</h1>

        <p>
          Plataforma web para la consulta, exploración y compra de libros de una editorial digital.
        </p>

        <div className="landing-actions">
          <Link to="/home">Explorar catálogo</Link>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </section>

      <section>
        <h2>Funcionalidades principales</h2>

        <ul>
          <li>Consulta de catálogo de libros.</li>
          <li>Búsqueda por título.</li>
          <li>Detalle individual de cada libro.</li>
          <li>Carrito de compra persistente.</li>
          <li>Perfil de usuario y últimos pedidos.</li>
        </ul>
      </section>
    </main>
  )
}

export default Landing