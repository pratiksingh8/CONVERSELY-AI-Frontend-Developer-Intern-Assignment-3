import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

import { useStore } from "../store/useStore";
import BlockWrapper from "./BlockWrapper.jsx";

export default function Canvas() {
  const { blocks, reorderBlocks } = useStore();

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = blocks.findIndex((b) => b.id === active.id);
    const newIndex = blocks.findIndex((b) => b.id === over.id);

    const newArr = [...blocks];
    const [moved] = newArr.splice(oldIndex, 1);
    newArr.splice(newIndex, 0, moved);

    reorderBlocks(newArr);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
          {blocks.length === 0 && (
            <p className="text-gray-400">Start adding blocks...</p>
          )}
          {blocks.map((block) => (
            <BlockWrapper key={block.id} block={block} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
