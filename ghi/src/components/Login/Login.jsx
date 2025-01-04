// filepath: /path/to/your/project/src/components/Login/Login.jsx
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('testUser');
  const [password, setPassword] = useState('12345');
  const [message, setMessage] = useState('Test Message');

  const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/login', { username, password }, { withCredentials: true });
//       localStorage.setItem('accessToken', response.data.accessToken);
//       setMessage('Login successful');
//     } catch (error) {
//       setMessage('Login failed');
//     }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  )
}

export default Login;
