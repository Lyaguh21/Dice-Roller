import type { ReactNode } from "react";

export default function ButtonSelectDice({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <button className="bg-white/10 active:bg-white/20 backdrop-blur-xs text-white font-bold w-[calc(33.33%-8px)] py-3 border-[1px] border-white/20 rounded-main px flex justify-center align-middle">
      {children}
    </button>
  );
}
