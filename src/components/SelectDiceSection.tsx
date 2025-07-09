import ButtonSelectDice from "./ui/ButtonSelectDice";

export default function SelectDiceSection() {
  return (
    <div className="flex gap-3 grow-1 flex-wrap">
      <ButtonSelectDice numButton={20}>d20</ButtonSelectDice>
      <ButtonSelectDice numButton={12}>d12</ButtonSelectDice>
      <ButtonSelectDice numButton={10}>d10</ButtonSelectDice>
      <ButtonSelectDice numButton={8}>d8</ButtonSelectDice>
      <ButtonSelectDice numButton={6}>d6</ButtonSelectDice>
      <ButtonSelectDice numButton={4}>d4</ButtonSelectDice>
    </div>
  );
}
