import { useRollDiceStore } from "../stores/RollDiceStore";
import cn from "classnames";

export default function CountRollSection() {
  const { resultRoll, selectedDice } = useRollDiceStore();

  return (
    <div className="flex justify-center py-main font-bold ">
      <div className="w-[70px] h-[70px] flex justify-center items-center bg-white/10 backdrop-blur-xs rounded-main border-[1px] border-white/20 shadow-2xl">
        <h1
          className={cn(
            " text-[40px] leading-[40px]",
            `${
              resultRoll === selectedDice
                ? "text-green-500"
                : resultRoll === 1
                ? "text-red-600"
                : "text-white"
            }`
          )}
        >
          {resultRoll !== null ? resultRoll : "-"}
        </h1>
      </div>
    </div>
  );
}
