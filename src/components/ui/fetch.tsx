import { useCurrentFrame, interpolate } from "remotion";

export default function SAPFetchData() {
  const frame = useCurrentFrame();

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-radial from-sky-900 via-slate-900 to-slate-950 bg-black text-white font-sans absolute">
      <div className="max-w-6xl w-full px-20">
        {/* Eyebrow */}
        <div className="text-xs tracking-widest uppercase text-sky-400 mb-4">
          Data Ingestion
        </div>

        {/* Title */}
        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          Fetch Marketplace Transactions
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-slate-300 max-w-4xl mb-20">
          Transaction data is fetched from the marketplace and prepared as the
          foundation for SAP integration.
        </p>

        {/* Content */}
        <div className="grid grid-cols-2 gap-24">
          {/* Left: What we fetch */}
          <FadeIn frame={frame} start={20}>
            <div>
              <div className="text-xs tracking-widest uppercase text-sky-400 mb-4">
                What is fetched
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>• Sales transactions</li>
                <li>• Returns & refunds</li>
                <li>• Marketplace charges & fees</li>
                <li>• Taxes and settlement data</li>
              </ul>
            </div>
          </FadeIn>

          {/* Right: Why it matters */}
          <FadeIn frame={frame} start={32}>
            <div>
              <div className="text-xs tracking-widest uppercase text-sky-400 mb-4">
                Why this step matters
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Acts as the <span className="text-white font-medium">base input</span> for the entire integration
                </li>
                <li>
                  • Normalized into a <span className="text-white font-medium">standard format</span>
                </li>
                <li>
                  • Prepared for <span className="text-white font-medium">validation & SAP mapping</span>
                </li>
                <li>
                  • Ensures accurate posting into SAP
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function FadeIn({
  frame,
  start,
  children,
}: {
  frame: number;
  start: number;
  children: React.ReactNode;
}) {
  const opacity = interpolate(frame, [start, start + 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [start, start + 10], [16, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </div>
  );
}
