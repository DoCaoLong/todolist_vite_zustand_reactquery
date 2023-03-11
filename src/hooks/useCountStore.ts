import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  increase: () => set((state: any) => ({ count: state.count + 1 })),
  decrease: () => set((state: any) => ({ count: state.count - 1 })),
}))