interface ProTipBlockProps {
  tip: string;
}

export default function ProTipBlock({ tip }: ProTipBlockProps) {
  return (
    <div
      className="relative my-8 overflow-hidden rounded-2xl border-l-4 border-terra-400 bg-terra-50 px-6 py-5"
      role="note"
      aria-label="Pro tip"
    >
      {/* Decorative icon */}
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-terra-400">
          <svg viewBox="0 0 20 20" fill="white" className="h-3.5 w-3.5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-terra-600">
          Pro Tip
        </span>
      </div>
      <p className="font-body text-[0.95rem] leading-relaxed text-terra-800">{tip}</p>
    </div>
  );
}
