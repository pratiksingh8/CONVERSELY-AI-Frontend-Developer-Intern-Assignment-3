import { create } from "zustand";

export const useStore = create((set) => ({
  blocks: [],

  addBlock: (type) =>
    set((state) => ({
      blocks: [
        ...state.blocks,
        { id: Date.now().toString(), type, content: "", level: 1, url: "" }
      ]
    })),

  updateBlock: (id, data) =>
    set((state) => ({
      blocks: state.blocks.map((b) =>
        b.id === id ? { ...b, ...data } : b
      )
    })),

  deleteBlock: (id) =>
    set((state) => ({
      blocks: state.blocks.filter((b) => b.id !== id)
    })),

  reorderBlocks: (newBlocks) => set({ blocks: newBlocks }),

  setBlocks: (blocks) => set({ blocks })
}));
