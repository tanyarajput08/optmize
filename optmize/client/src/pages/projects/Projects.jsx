import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import CreateProjectModal from "./CreateProjectModal";

import ProjectGrid from "./ProjectGrid";

import api from "../../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const fetchProjects = async () => {

    try {

      const token = localStorage.getItem("token");

      const { data } = await api.get(
        "/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProjects(data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {

    fetchProjects();

  }, []);

  return (
    <DashboardLayout>

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-black">
            Projects
          </h1>

          <p className="text-zinc-500 mt-2">
            Manage all your team projects.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-orange-400 text-black px-6 py-4 rounded-2xl font-bold hover-glow"
        >
          + New Project
        </button>

      </div>

      <ProjectGrid projects={projects} />

      {showModal && (
        <CreateProjectModal
          closeModal={() => setShowModal(false)}
          fetchProjects={fetchProjects}
        />
      )}

    </DashboardLayout>
  );
}

export default Projects;