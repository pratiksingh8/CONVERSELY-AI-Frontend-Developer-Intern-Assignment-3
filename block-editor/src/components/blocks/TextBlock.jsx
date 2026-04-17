import { useStore } from "../../store/useStore";

export default function TextBlock({ block }) {
  const update = useStore((s) => s.updateBlock);

  return (
    <textarea
      value={block.content}
      onChange={(e) => update(block.id, { content: e.target.value })}
      className="w-full border p-2"
      placeholder="Write text..."
    />
  );
}
