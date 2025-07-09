export default function HistoryBoxTemplate({
  dice,
  result,
}: {
  dice: number;
  result: number;
}) {
  return (
    <div className="bg-white/10 flex justify-center backdrop-blur-sm border w-[calc(24%-8px)] border-white/20 rounded-lg px-3 py-1 text-white text-sm">
      d{dice}: {result}
    </div>
  );
}
