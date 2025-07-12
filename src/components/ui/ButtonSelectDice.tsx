import type { ReactNode } from "react";
import { useRollDiceStore } from "../../stores/RollDiceStore";
import cn from "classnames";

export default function ButtonSelectDice({
  children,
  numButton,
}: {
  children: ReactNode;
  numButton: number;
}) {
  const { selectedDice, setSelectedDice, setResultRoll, setIsRoll, isRoll } =
    useRollDiceStore();

  return (
    <button
      disabled={isRoll}
      onClick={() => {
        setSelectedDice(numButton);
        setResultRoll(null);
        setIsRoll(false);
      }}
      className={cn(
        "bg-white/10 active:bg-white/20 backdrop-blur-xs text-white font-bold w-[calc(33.33%-8px)] py-3 border-[1px] border-white/20 rounded-main px flex justify-center align-middle ",
        `${selectedDice === numButton ? "bg-white/30" : ""}`,
        `${isRoll ? "cursor-not-allowed opacity-45" : ""}`
      )}
    >
      {children}
    </button>
  );
}
