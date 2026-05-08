import { useDroppable } from "@dnd-kit/core";

import KanbanTask from "./KanbanTask";

function KanbanColumn({
  title,
  tasks
}) {

  const { setNodeRef } = useDroppable({
    id: title
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-[#141414] rounded-3xl p-5 min-h-[600px]"
    >

      <h2 className="text-2xl font-black mb-6">
        {title}
      </h2>

      <div className="flex flex-col gap-5">

        {tasks.map((task) => (

          <KanbanTask
            key={task._id}
            task={task}
          />

        ))}

      </div>

    </div>
  );
}

export default KanbanColumn;