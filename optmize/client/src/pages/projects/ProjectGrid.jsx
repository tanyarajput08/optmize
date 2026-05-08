import ProjectCard from "../../components/dashboard/ProjectCard";

function ProjectGrid({ projects }) {

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">

      {projects.map((project) => (

        <ProjectCard
          key={project._id}
          project={project}
        />

      ))}

    </div>
  );
}

export default ProjectGrid;