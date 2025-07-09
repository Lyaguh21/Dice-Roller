import CountRollSection from "./components/CountRollSection";
import HistoryRollSection from "./components/HistoryRollSection";
import LogoSection from "./components/LogoSection";
import RollDiceBoxSection from "./components/RollDiceBoxSection";

import SelectDiceSection from "./components/SelectDiceSection";
import ButtonRollDice from "./components/ui/ButtonRollDice";

function App() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
      <div className=" min-h-screen px-7 max-w-[425px] w-screen">
        <LogoSection />

        <SelectDiceSection />
        <CountRollSection />

        <RollDiceBoxSection />
        <ButtonRollDice />
        <HistoryRollSection />
      </div>
    </div>
  );
}

export default App;
