import { create } from "zustand";

type CounterStore = {
  count: number
  increment: VoidFunction,
  incrementAsync: () => Promise<void>,
  decrement: VoidFunction
  reset: VoidFunction
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  incrementAsync: async () => {
    // poderíamos adicionar um response de API aqui
    await new Promise((resolved) => setTimeout(resolved, 1000))
    set((state) => ({count: state.count + 1}))
  },
  decrement: () => set((state) => ({count: state.count - 1})),
  reset: () => set(() => ({count: 0}))
}))