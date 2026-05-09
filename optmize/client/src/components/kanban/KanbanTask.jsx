import { useDraggable } from "@dnd-kit/core";
import { Trash2 } from "lucide-react";
import api from "../../services/api";

function KanbanTask({ task, fetchTasks }) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = useDraggable({
    id: task._id
  });

  const style = transform
    ? {
        transform: `translate3d(
          ${transform.x}px,
          ${transform.y}px,
          0
        )`
      }
    : undefined;

  const handleDelete = async (e) => {
    // Prevent the drag listener from catching this click
    e.stopPropagation();
    
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        const token = localStorage.getItem("token");
        await api.delete(`/tasks/${task._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        fetchTasks();
      } catch (error) {
        console.error("Error deleting task:", error);
        alert("Failed to delete task");
      }
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="glass-card p-5 rounded-2xl cursor-grab active:cursor-grabbing relative group"
    >

      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg pr-6">
          {task.title}
        </h3>
        
        {/* Delete Button */}
        <button 
          onClick={handleDelete}
          onPointerDown={(e) => e.stopPropagation()} // Crucial for dnd-kit to ignore pointer events on the button
          className="text-zinc-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 absolute top-5 right-5"
          title="Delete Task"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <p className="text-zinc-400 text-sm mt-2">
        {task.description}
      </p>

      <div className="mt-4 flex justify-between">

        <span className={`text-sm font-medium ${
          task.priority?.toLowerCase() === 'high' ? 'text-red-500' :
          task.priority?.toLowerCase() === 'medium' ? 'text-green-500' :
          task.priority?.toLowerCase() === 'low' ? 'text-yellow-500' :
          'text-orange-400'
        }`}>
          {task.priority}
        </span>

        <span className="text-zinc-500 text-sm">
          {new Date(task.deadline).toLocaleDateString()}
        </span>

      </div>

    </div>
  );
}

export default KanbanTask;