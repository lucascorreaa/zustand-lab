import { create } from "zustand";

type CounterStore = {
  count: number
  increment: VoidFunction,
  decrement: VoidFunction
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1}))
}))