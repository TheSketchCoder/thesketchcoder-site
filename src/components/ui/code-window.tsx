type CodeWindowProps = {
  title: string;
  lines: string[];
};

export function CodeWindow({ title, lines }: CodeWindowProps) {
  return (
    <div className="notebook-edge rounded-lg border border-[#6f563e]/50 bg-[#1a140f]/92 shadow-2xl shadow-black/25">
      <div className="flex items-center justify-between border-b border-[#f6e9cf]/10 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#e88a75]/80" />
          <span className="size-2.5 rounded-full bg-[#f7bf62]/80" />
          <span className="size-2.5 rounded-full bg-[#b8df8d]/80" />
        </div>
        <p className="font-mono text-xs text-[#bda98a]">{title}</p>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-7 text-[#f6e9cf]">
        <code>
          {lines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
