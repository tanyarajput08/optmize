import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
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

      await api.post("/auth/register", formData);

      alert("Registration successful");

      navigate("/login");

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D0D]">

      <div className="glass-card p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8 gradient-text">
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl outline-none border border-zinc-800 focus:border-orange-400"
          />

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

          <select
            name="role"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl outline-none border border-zinc-800 focus:border-orange-400"
          >
            <option value="member">
              Member
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

          <button
            className="bg-orange-400 text-black py-4 rounded-xl font-bold hover-glow"
          >
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;