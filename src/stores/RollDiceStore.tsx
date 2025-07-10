import { create } from "zustand";

interface RollDiceStore {
  selectedDice: number;
  resultRoll: number | null;
  historyRoll: object[];
  isRoll: boolean;

  setSelectedDice: (dice: number) => void;
  setResultRoll: (result: number | null) => void;
  addToHistory: (el: object) => void;
  setIsRoll: (el: boolean) => void;
}

export const useRollDiceStore = create<RollDiceStore>((set) => ({
  selectedDice: 20,
  resultRoll: null,
  historyRoll: [],
  isRoll: false,

  setSelectedDice: (dice) => set({ selectedDice: dice }),
  setResultRoll: (result) => set({ resultRoll: result }),
  addToHistory: (el) =>
    set((state) => ({ historyRoll: [el, ...state.historyRoll] })),
  setIsRoll: (el) => set({ isRoll: el }),
}));
