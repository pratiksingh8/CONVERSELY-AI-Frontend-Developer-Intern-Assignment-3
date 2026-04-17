import { useStore } from "../../store/useStore";

export default function ImageBlock({ block }) {
  const update = useStore((s) => s.updateBlock);

  return (
    <div>
      <input
        type="text"
        placeholder="Image URL"
        value={block.url}
        onChange={(e) => update(block.id, { url: e.target.value })}
        className="w-full border p-2 mb-2"
      />
      {block.url && <img src={block.url} alt="" className="max-h-60" />}
    </div>
  );
}
