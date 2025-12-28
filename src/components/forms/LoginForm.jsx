import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import API from '../../services/api'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await API.post('/auth/login', {
        email,
        password,
      })

      // Save user in context
      login(res.data.user)

      // (Optional) save token
      localStorage.setItem('token', res.data.token)

      navigate('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  )
}
