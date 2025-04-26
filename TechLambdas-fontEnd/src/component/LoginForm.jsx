import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import loginImg from '../image/login-page.png';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login', {
        username,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data);
        navigate('/home'); 
        console.error('Login failed:', response);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert("Invalid Username and Password",error)
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-10">
          <img
            src="https://c.animaapp.com/m9v20vo7FOy7oQ/img/techlambdas-1.svg"
            alt="Logo"
            className="mb-10 w-20"
          />
          <h2 className="font-dmsans font-normal text-[32.5px] leading-[100%] tracking-[0%] text-center">
            <span className="text-[30px] text-white font-normal pr-1">
              Welcome to
            </span>
            <span className="text-green-500 font-bold pb-2">TechLambdas</span>
          </h2>
          <h2 className="text-green-500 font-dmsans font-bold text-[30px] text-center ">
            PVT Ltd
          </h2>
        </div>
      </div>

      <div className=" font-dmsans w-1/2 flex flex-col justify-center px-[150px] mb-100">
        <h2 className="font-dmsans text-[25px] font-semibold mb-10 ">
          Welcome Back !
        </h2>
        <h3 className="text-green-600 text-[31px] mb-1 font-medium">
          Sign in to
        </h3>
        <p className="text-[16px] text-gray-700 mb-8">Lorem Ipsum is simply</p>

        <form
          className="w-[423px] h-[336px] space-y-6 mt-7"
          onSubmit={handleLogin}
        >
          <div className="w-full h-[92px]">
            <label className="block text-[16px] font-medium text-gray-700 mb-1">
              User name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your user name"
              className="w-full h-[59px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="w-full h-[92px]">
            <label className="block text-[16px] font-medium text-gray-700 mb-1 mt-4">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full h-[59px] px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300 mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
 