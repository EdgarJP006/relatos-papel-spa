import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

function Login() {
  const navigate = useNavigate()

  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const success = login(email, password)

    if (!success) {
      setError('Credenciales incorrectas')
      return
    }

    navigate('/profile')
  }

  return (
    <main className="login-page">

      <section className="login-image-section">
        <div className="login-overlay">
          <h1>Relatos de Papel</h1>
          <p>
            Explora historias únicas y descubre tu próxima aventura literaria.
          </p>
        </div>
      </section>

      <section className="login-form-section">
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <h2>Iniciar sesión</h2>
          <p className="login-subtitle">
            Accede con tu cuenta para continuar
          </p>
          <div className="input-group">
            <label htmlFor="email">
              Correo electrónico
            </label>

            <input
              id="email"
              type="email"
              placeholder="usuario@correo.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}
          <button type="submit">
            Ingresar
          </button>
        </form>
      </section>
    </main>
  )
}

export default Login