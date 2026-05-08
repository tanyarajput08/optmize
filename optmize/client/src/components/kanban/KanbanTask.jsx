import { useDraggable } from "@dnd-kit/core";

function KanbanTask({ task }) {

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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="glass-card p-5 rounded-2xl cursor-grab active:cursor-grabbing"
    >

      <h3 className="font-bold text-lg">
        {task.title}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {task.description}
      </p>

      <div className="mt-4 flex justify-between">

        <span className="text-orange-400 text-sm">
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