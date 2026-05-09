import {
  DndContext
} from "@dnd-kit/core";

import KanbanColumn from "./KanbanColumn";

import api from "../../services/api";

function KanbanBoard({
  tasks,
  fetchTasks
}) {

  const handleDragEnd = async (event) => {

    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;

    const newStatus = over.id;

    try {

      const token = localStorage.getItem("token");

      await api.put(
        `/tasks/${taskId}/status`,
        {
          status: newStatus
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
    >

      <div className="grid grid-cols-3 gap-6 mt-10">

        <KanbanColumn
          title="Todo"
          tasks={
            tasks.filter(
              (task) =>
                task.status === "Todo"
            )
          }
          fetchTasks={fetchTasks}
        />

        <KanbanColumn
          title="In Progress"
          tasks={
            tasks.filter(
              (task) =>
                task.status === "In Progress"
            )
          }
          fetchTasks={fetchTasks}
        />

        <KanbanColumn
          title="Completed"
          tasks={
            tasks.filter(
              (task) =>
                task.status === "Completed"
            )
          }
          fetchTasks={fetchTasks}
        />

      </div>

    </DndContext>
  );
}

export default KanbanBoard;