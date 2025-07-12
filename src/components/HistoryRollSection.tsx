import { useRollDiceStore } from "../stores/RollDiceStore";
import HistoryBoxTemplate from "./ui/HistoryBoxTemplate";

export default function HistoryRollSection() {
  const { historyRoll } = useRollDiceStore();
  return (
    <>
      <div className="flex w-full justify-center py-3">
        <h3 className="text-white text-sm font-semibold text-center opacity-70">
          История бросков
        </h3>
      </div>
      <div className="flex gap-1.5 grow-1 flex-wrap">
        {historyRoll.slice(0, 4).map((el: any) => (
          <HistoryBoxTemplate
            key={historyRoll.indexOf(el)}
            dice={el.dice}
            result={el.result}
          />
        ))}
      </div>
    </>
  );
}
