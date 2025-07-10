import { useRollDiceStore } from "../../stores/RollDiceStore";

export default function ButtonRollDice() {
  const { setResultRoll, selectedDice, addToHistory, isRoll } =
    useRollDiceStore();

  const handleRollDice = async () => {
    const newResult = Math.floor(Math.random() * selectedDice + 1);
    setResultRoll(newResult);
    setTimeout(() => {
      addToHistory({ result: newResult, dice: selectedDice });
    }, 1200);
  };
  return (
    <button
      disabled={isRoll}
      onClick={handleRollDice}
      className="flex justify-center gap-2 mt-main w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 border border-white/30 section-clickable active:scale-102"
    >
      <img src="src\assets\rollDice.svg" className="size-6" />
      <p>Бросить кубик</p>
    </button>
  );
}
