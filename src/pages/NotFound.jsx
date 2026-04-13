import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main>
      <section>
        <h1>Error 404</h1>

        <p>
          La página solicitada no existe o fue movida dentro de la aplicación.
        </p>

        <Link to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default NotFound