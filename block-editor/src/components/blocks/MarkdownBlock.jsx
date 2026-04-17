import { useStore } from "../../store/useStore";
import { marked } from "marked";

export default function MarkdownBlock({ block }) {
  const update = useStore((s) => s.updateBlock);

  return (
    <div>
      <textarea
        value={block.content}
        onChange={(e) => update(block.id, { content: e.target.value })}
        className="w-full border p-2"
      />
      <div
        className="prose mt-2"
        dangerouslySetInnerHTML={{ __html: marked.parse(block.content || "") }}
      />
    </div>
  );
}
