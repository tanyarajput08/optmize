import { useState } from "react";

import api from "../../services/api";

function CreateTaskModal({
  closeModal,
  fetchTasks
}) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
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
        "/tasks",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchTasks();

      closeModal();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="glass-card w-[500px] p-8 rounded-3xl">

        <h2 className="text-3xl font-black mb-6">
          Create Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400"
          />

          <textarea
            name="description"
            placeholder="Task Description"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400 h-[120px]"
          />

          <select
            name="priority"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className="bg-[#1A1A1A] p-4 rounded-xl border border-zinc-800 outline-none focus:border-orange-400"
          />

          <button
            className="bg-orange-400 text-black py-4 rounded-xl font-bold hover-glow"
          >
            Create Task
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateTaskModal;