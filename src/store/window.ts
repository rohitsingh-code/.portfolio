import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    window: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data: null) => 
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = true;
        win.zIdex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    
    closeWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if(!win) return;
      win.isOpen = false;
      win.zIdex = INITIAL_Z_INDEX;
      win.data = null;
    }),
    
    focusWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if(!win) return;
      win.zIdex = state.nextZIndex++;
    }),
    
    
  })),
);

export default useWindowStore;