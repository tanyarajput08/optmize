import { useState } from "react";

import api from "../../services/api";

function CreateProjectModal({ closeModal, fetchProjects }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: ""
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

      const token = localStorage.getItem("token");

      await api.post(
        "/projects",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchProjects();

      closeModal();

    } catch (error) {

      alert(error.response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="glass-card w-[500px] p-8 rounded-3xl">

        <h2 className="text-3xl font-black mb-6">
          Create Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400 h-[120px]"
          />

          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400"
          />

          <div className="flex gap-4 mt-4">

            <button
              type="submit"
              className="flex-1 bg-orange-400 text-black py-4 rounded-xl font-bold hover-glow"
            >
              Create
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="flex-1 border border-zinc-700 py-4 rounded-xl hover:border-orange-400"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default CreateProjectModal;