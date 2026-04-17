import { useEffect } from "react";
import Palette from "./components/Palette.jsx";
import Canvas from "./components/Canvas.jsx";
import { useStore } from "./store/useStore";

function App() {
  const { blocks, setBlocks } = useStore();

  useEffect(() => {
    const saved = localStorage.getItem("blocks");
    if (saved) setBlocks(JSON.parse(saved));
  }, [setBlocks]);

  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  return (
    <div className="flex h-screen">
      <Palette />
      <Canvas />
    </div>
  );
}

export default App;
