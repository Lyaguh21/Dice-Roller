import { useEffect, useState } from "react";
import { useRollDiceStore } from "../stores/RollDiceStore";
import cn from "classnames";

export default function CountRollSection() {
  const { resultRoll, selectedDice } = useRollDiceStore();
  const [text, setText] = useState<number | null | string>();

  useEffect(() => {
    if (resultRoll !== null) {
      setTimeout(() => {
        setText(resultRoll);
      }, 1200);
    } else {
      setText("-");
    }
  }, [resultRoll]);

  return (
    <div className="flex justify-center py-main font-bold ">
      <div className="w-[70px] h-[70px] flex justify-center items-center bg-white/10 backdrop-blur-xs rounded-main border-[1px] border-white/20 shadow-2xl">
        <h1
          className={cn(
            " text-[40px] leading-[40px]",
            `${
              text === selectedDice
                ? "text-green-500"
                : text === 1
                ? "text-red-600"
                : "text-white"
            }`
          )}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
