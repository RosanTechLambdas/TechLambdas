import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Welcome Message */}
      <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-10">
          <img src="/logo.png" alt="Logo" className="mb-6 w-20" />
          <h1 className="text-xl font-light">Welcome to</h1>
          <h2 className="text-2xl font-bold text-green-500">TechLambdas<br />PVT Ltd</h2>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <h2 className="text-2xl font-semibold mb-2">Welcome Back !</h2>
        <h3 className="text-green-600 text-lg mb-1 font-medium">Sign in to</h3>
        <p className="text-sm text-gray-500 mb-8">Lorem Ipsum is simply</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">User name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                👁️
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
