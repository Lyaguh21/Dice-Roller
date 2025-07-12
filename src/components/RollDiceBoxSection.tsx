import { useRollDiceStore } from "../stores/RollDiceStore";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import cn from "classnames";
import { useEffect, useMemo, useState } from "react";

export default function RollDiceBoxSection() {
  const {
    selectedDice,
    resultRoll,
    setIsRoll,
    setResultRoll,
    addToHistory,
    isRoll,
  } = useRollDiceStore();
  const controls = useAnimation();
  const [display, setDisplay] = useState<null | number>(resultRoll);

  useEffect(() => {
    setDisplay(resultRoll);
  }, [resultRoll]);

  const handleRollDice = async () => {
    setIsRoll(true);

    let intervalId: number | null = null;

    intervalId = window.setInterval(() => {
      const randomNumber = Math.floor(Math.random() * selectedDice) + 1;
      setDisplay(randomNumber);
    }, 400);

    const finalResult = Math.floor(Math.random() * selectedDice) + 1;

    try {
      await controls.stop();

      await controls.start({
        x: [0, 40, -30, -5, 0],
        y: [-40, 30, -10, 0, 0],
        rotateZ: [0, 360 * 3],
        scale: [1, 1.1, 1],
        transition: {
          duration: 1.2,
          ease: [0.2, 0.8, 0.4, 1],
        },
      });

      await controls.start({
        x: 0,
        y: 0,
        transition: { duration: 0.3 },
      });
    } catch (e) {
      console.log("Анимация прервана", e);
    } finally {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setTimeout(() => {
        setDisplay(finalResult);
        setResultRoll(finalResult);
        addToHistory({ result: finalResult, dice: selectedDice });
      }, 200);

      setIsRoll(false);
    }
  };

  const diceElement = useMemo(() => {
    return (
      <motion.div
        animate={controls}
        initial={{ rotateZ: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        className={`
        ${selectedDice === 20 ? "hexagon" : ""}
        ${selectedDice === 12 ? "octagon" : ""}
        ${selectedDice === 10 ? "rhombus" : ""}
        ${selectedDice === 8 || selectedDice === 4 ? "triangle" : ""}
        ${selectedDice === 6 ? "square" : ""}
        ${selectedDice === 100 ? "d100" : ""}
        flex items-center justify-center
        text-white text-4xl font-bold
      `}
      >
        {display === null ? selectedDice : display}
      </motion.div>
    );
  }, [selectedDice, controls, display]);

  return (
    <>
      <div className="h-[200px] flex justify-center items-center w-full rounded-main bg-white/5 backdrop-blur-sm border border-white/20">
        <AnimatePresence mode="wait">{diceElement}</AnimatePresence>
      </div>

      <button
        disabled={isRoll}
        onClick={handleRollDice}
        className={cn(
          "flex justify-center gap-2 mt-main w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 border border-white/30 section-clickable active:scale-102 ",
          ` ${isRoll ? "cursor-not-allowed opacity-45" : ""}`
        )}
      >
        <img src="/images/rollDice.svg" className="size-6" />
        <p>Бросить кубик</p>
      </button>
    </>
  );
}
