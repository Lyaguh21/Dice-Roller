import { useEffect, useState } from "react";
import { useRollDiceStore } from "../stores/RollDiceStore";

import { AnimatePresence, motion, useAnimation } from "motion/react";

export default function RollDiceBoxSection() {
  const { selectedDice, resultRoll, setIsRoll } = useRollDiceStore();
  const controls = useAnimation();
  const [result, setResult] = useState<null | number>(null);

  useEffect(() => {
    setResult(selectedDice);
  }, [selectedDice]);

  useEffect(() => {
    const currentControls = controls;

    const rollAnimation = async () => {
      setIsRoll(true);
      try {
        await currentControls.stop();

        await currentControls.start({
          x: [0, 40, -30, -5, 0], // Движение вправо-влево
          y: [-40, 30, -10, 0, 0], // Эффект падения
          rotateZ: [0, 360 * 3],
          scale: [1, 1.1, 1],
          transition: {
            duration: 1.2,
            ease: [0.2, 0.8, 0.4, 1],
          },
        });

        await currentControls.start({
          x: 0,
          y: 0,
          transition: { duration: 0.3 },
        });
      } catch (e) {
        console.log("Анимация прервана", e);
      } finally {
        setResult(resultRoll);
        setIsRoll(false);
      }
    };

    if (resultRoll !== null) {
      rollAnimation();
    }

    return () => {
      currentControls.stop();
    };
  }, [resultRoll]);

  const DiceComponent = () => (
    <motion.div
      key={`dice-${selectedDice}-${resultRoll}`}
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
      {resultRoll === null ? selectedDice : result}
    </motion.div>
  );

  return (
    <div className="h-[200px] flex justify-center items-center w-full rounded-main bg-white/5 backdrop-blur-sm border border-white/20">
      <AnimatePresence mode="wait">
        <DiceComponent />
      </AnimatePresence>
    </div>
  );
}
