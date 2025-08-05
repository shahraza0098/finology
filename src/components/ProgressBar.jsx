export default function ProgressBar({ progress = 0 }) {
  const pct = Math.min(100, Math.max(0, Math.round(progress)))
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
      <div
        className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-[#6366F1] to-[#A78BFA] flex items-center justify-center text-[10px] font-semibold text-white"
        style={{ width: `${pct}%` }}
      >
        {pct >= 8 ? `${pct}%` : null}
      </div>
      {pct < 8 && (
        <div className="absolute inset-y-0 right-2 flex items-center text-xs font-medium text-gray-700">
          {pct}%
        </div>
      )}
    </div>
  )
}