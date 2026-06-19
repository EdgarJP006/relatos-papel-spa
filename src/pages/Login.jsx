import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  // 🔐 Extraemos únicamente el método global que existe en tu AuthContext
  const { loginGlobal } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔄 Corregido: Empezamos en false

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/api/v1/auth/login", { email, password });

      // 🌟 CORRECCIÓN 1: Extraemos "accessToken" exactamente como lo manda Spring Boot
      const { accessToken } = response.data;

      // 🌟 CORRECCIÓN 2: Le pasamos accessToken a tu estado global.
      // Como el backend no manda un objeto 'user', armamos uno básico con el email por ahora.
      loginGlobal(accessToken, { email });

      navigate("/profile");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Credenciales inválidas. Por favor, verifica tu correo electrónico y contraseña.");
      } else {
        setError("No se pudo conectar al servicio de login. Verifica tu conexión o el Gateway.");
      }
    } finally {
      setLoading(false);
    }
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
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <p className="login-subtitle">Accede con tu cuenta para continuar</p>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                  id="email"
                  type="email"
                  placeholder="usuario@correo.com"
                  value={email}
                  disabled={loading}
                  onChange={(event) => setEmail(event.target.value)}
                  required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  disabled={loading}
                  onChange={(event) => setPassword(event.target.value)}
                  required
              />
            </div>

            {error && <p className="login-error">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Cargando..." : "Ingresar"}
            </button>
          </form>
        </section>
      </main>
  );
}

export default Login;