import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import api from "../../services/api";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await api.post(
        "/auth/login",
        formData
      );

      login(data.user, data.token);

      if (data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/member-dashboard");
      }

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">

      <div className="glass-card p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Welcome Back
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl outline-none border border-zinc-800 focus:border-orange-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl outline-none border border-zinc-800 focus:border-orange-400"
          />

          <button
            className="bg-orange-400 text-black py-4 rounded-xl font-bold hover-glow"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;