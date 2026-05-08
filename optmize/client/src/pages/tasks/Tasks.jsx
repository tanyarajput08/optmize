import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import TaskCard from "../../components/tasks/TaskCard";

import CreateTaskModal from "../../components/tasks/CreateTaskModal";

import api from "../../services/api";
import KanbanBoard from "../../components/kanban/KanbanBoard";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [filteredTasks, setFilteredTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const { data } = await api.get(
        "/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setTasks(data);

      setFilteredTasks(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchTasks();

  }, []);

  useEffect(() => {

    let updatedTasks = [...tasks];

    if (statusFilter !== "All") {

      updatedTasks = updatedTasks.filter(
        (task) => task.status === statusFilter
      );
    }

    if (search.trim() !== "") {

      updatedTasks = updatedTasks.filter(
        (task) =>
          task.title
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    setFilteredTasks(updatedTasks);

  }, [search, statusFilter, tasks]);

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black">
            Tasks
          </h1>

          <p className="text-zinc-500 mt-2">
            Manage and track team tasks.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-400 text-black px-6 py-4 rounded-2xl font-bold hover-glow"
        >
          + New Task
        </button>

      </div>

      {/* Filters */}
      <div className="flex gap-4 mt-10">

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl px-5 py-4 w-[300px] outline-none focus:border-orange-400"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="bg-[#1A1A1A] border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-orange-400"
        >
          <option>All</option>
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

      </div>

      {/* Task Grid */}
     <KanbanBoard
  tasks={filteredTasks}
  fetchTasks={fetchTasks}
/>

        

      {/* Modal */}
      {showModal && (
        <CreateTaskModal
          closeModal={() => setShowModal(false)}
          fetchTasks={fetchTasks}
        />
      )}

    </DashboardLayout>
  );
}

export default Tasks;