import { useStore } from "../store/useStore";

export default function Palette() {
  const addBlock = useStore((s) => s.addBlock);

  const types = ["text", "image", "header", "markdown"];

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="font-bold mb-4">Blocks</h2>
      {types.map((t) => (
        <button
          key={t}
          onClick={() => addBlock(t)}
          className="w-full mb-2 p-2 bg-white rounded shadow"
        >
          {t}
        </button>
      ))}
    </div>
  );
}
