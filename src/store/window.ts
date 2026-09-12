import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants/data";
import type { WindowType } from "@/constants/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create<WindowType>()(
  immer((set) => ({
    windows: structuredClone(WINDOW_CONFIG),
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data) => 
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    
    closeWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if(!win) return;
      win.isOpen = false;
      win.zIndex = INITIAL_Z_INDEX;
      win.data = null;
    }),
    
    focusWindow: (windowKey) => set((state) => {
      const win = state.windows[windowKey];
      if(!win) return;
      win.zIndex = state.nextZIndex++;
    }),
    
    
  })),
);

export default useWindowStore;