import ButtonSelectDice from "./components/ButtonSelectDice";

function App() {
  return (
    <div className="flex justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className=" h-[100vh] px-7 max-w-[425px] w-screen">
        <div className="flex w-full justify-center pt-7">
          <img src="src\assets\d20.svg" className="size-24" />
        </div>
        <div className="flex justify-center py-5">
          <h1 className="text-white text-2xl font-bold">Dice Roller</h1>
        </div>

        <div className=" flex gap-3 grow-1 flex-wrap ">
          <ButtonSelectDice>d20</ButtonSelectDice>
          <ButtonSelectDice>d12</ButtonSelectDice>
          <ButtonSelectDice>d10</ButtonSelectDice>
          <ButtonSelectDice>d8</ButtonSelectDice>
          <ButtonSelectDice>d6</ButtonSelectDice>
          <ButtonSelectDice>d4</ButtonSelectDice>
        </div>

        <div className="flex justify-center py-[20px] font-bold ">
          <div className="w-[70px] h-[70px] flex justify-center items-center bg-white/10 backdrop-blur-xs rounded-main border-[1px] border-white/20 shadow-2xl">
            <h1 className="text-white text-[40px] leading-[40px]">20</h1>
          </div>
        </div>

        <div className="h-[200px] w-full  rounded-main bg-white/5 backdrop-blur-sm border border-white/20 "></div>

        <button className="flex justify-center gap-2 mt-[20px] w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 border border-white/30 section-clickable">
          <img src="src\assets\rollDice.svg" className="size-6 " />
          <p>Бросить кубик</p>
        </button>

        <div className="flex w-full justify-center py-4">
          <h3 className="text-white text-sm font-semibold mb-3 text-center opacity-70">
            История бросков
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
