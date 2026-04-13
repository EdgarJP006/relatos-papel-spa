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
    <main>
      <h1>Inicio de sesión</h1>

      <p>Accede con tu cuenta de usuario.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico</label>

          <input
            id="email"
            type="email"
            placeholder="usuario@correo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label htmlFor="password">Contraseña</label>

          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Iniciar sesión
        </button>

        {error && <p>{error}</p>}
      </form>
    </main>
  )
}

export default Login