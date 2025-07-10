import { useState } from "react";
import { useRollDiceStore } from "../stores/RollDiceStore";

export default function LogoSection() {
  const [cnt, setCnt] = useState<number>(0);
  const { setSelectedDice, setResultRoll } = useRollDiceStore();

  const handleClick = () => {
    setCnt(cnt + 1);
    if (cnt >= 5) {
      setSelectedDice(100);
      setResultRoll(null);
    }
  };

  return (
    <>
      <div className="flex w-full justify-center pt-main">
        <img
          src="src\assets\d20.svg"
          className="size-24 active:scale-95 "
          onClick={handleClick}
        />
      </div>
      <div className="flex justify-center py-main">
        <h1 className="text-white text-2xl font-bold">Dice Roller</h1>
      </div>
    </>
  );
}
