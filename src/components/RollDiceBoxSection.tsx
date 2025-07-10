import { useRollDiceStore } from "../stores/RollDiceStore";

export default function RollDiceBoxSection() {
  const { selectedDice, resultRoll } = useRollDiceStore();
  return (
    <div className="h-[200px] flex justify-center items-center w-full rounded-main bg-white/5 backdrop-blur-sm border border-white/20 ">
      {selectedDice === 20 && (
        <div className="hexagon">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 12 && (
        <div className="octagon">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 10 && (
        <div className="rhombus">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 8 && (
        <div className="triangle">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 6 && (
        <div className="square">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 4 && (
        <div className="triangle">{resultRoll ?? selectedDice}</div>
      )}
      {selectedDice === 100 && (
        <div className="d100">{resultRoll ?? selectedDice}</div>
      )}
    </div>
  );
}
