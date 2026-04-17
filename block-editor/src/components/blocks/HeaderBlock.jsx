import { useStore } from "../../store/useStore";

export default function HeaderBlock({ block }) {
  const update = useStore((s) => s.updateBlock);

  const Tag = `h${block.level}`;

  return (
    <div>
      <select
        value={block.level}
        onChange={(e) => update(block.id, { level: Number(e.target.value) })}
      >
        <option value={1}>H1</option>
        <option value={2}>H2</option>
        <option value={3}>H3</option>
      </select>

      <input
        value={block.content}
        onChange={(e) => update(block.id, { content: e.target.value })}
        className="w-full border p-2 mt-2"
      />

      <Tag className="mt-2">{block.content}</Tag>
    </div>
  );
}
