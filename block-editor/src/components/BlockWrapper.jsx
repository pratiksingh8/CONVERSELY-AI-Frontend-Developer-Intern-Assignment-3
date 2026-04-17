import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../store/useStore";

import TextBlock from "./blocks/TextBlock.jsx";
import ImageBlock from "./blocks/ImageBlock.jsx";
import HeaderBlock from "./blocks/HeaderBlock.jsx";
import MarkdownBlock from "./blocks/MarkdownBlock.jsx";

export default function BlockWrapper({ block }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  const deleteBlock = useStore((s) => s.deleteBlock);

  const renderBlock = () => {
    switch (block.type) {
      case "text": return <TextBlock block={block} />;
      case "image": return <ImageBlock block={block} />;
      case "header": return <HeaderBlock block={block} />;
      case "markdown": return <MarkdownBlock block={block} />;
      default: return null;
    }
  };

  return (
    <div ref={setNodeRef} style={style} className="mb-4 p-4 bg-white rounded shadow">
      <div className="flex justify-between mb-2">
        <span {...attributes} {...listeners} className="cursor-move">☰</span>
        <button onClick={() => deleteBlock(block.id)}>❌</button>
      </div>
      {renderBlock()}
    </div>
  );
}
