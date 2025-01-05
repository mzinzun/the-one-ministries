/* eslint-disable react/prop-types */
// filepath: /path/to/your/project/src/components/Login/Login.jsx
import { useState } from 'react';
import axios from 'axios';

const Login = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    console.log('attempting login');
    console.log('username:', username);
    try {
      const response = await axios.post('http://localhost:4000/login', { username, password }, { withCredentials: true });
      localStorage.setItem('accessToken', response.data.accessToken);
      setUser(response.data.user);
      setMessage(`Login successful. Welcome Mr. ${response.data.user.lastName}`);
    } catch (error) {
      setMessage('Login failed: ' + error.response.data);
    }
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
