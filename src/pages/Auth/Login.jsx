import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[400px] bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Sign in to Diu Travels
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Enter your email and password to access your account.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between mb-6 text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-purple-700 text-white font-medium py-2 rounded-lg hover:bg-purple-800 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Home
          </a>
        </p>
      </div>
    </div>
  );
}
