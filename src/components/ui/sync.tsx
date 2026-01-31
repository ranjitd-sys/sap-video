import { useCurrentFrame, interpolate } from "remotion";

export default function SAPFinalSync() {
  const frame = useCurrentFrame();

  return (
    <div
      className="w-full h-full flex items-center justify-center text-white font-sans relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px at 15% 15%, #020617 0%, #000000 70%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px at 20% 20%, rgba(59,130,246,0.14), transparent 60%)",
        }}
      />

      {/* Glass container */}
      <div
        className="max-w-6xl w-full px-20 py-16 rounded-[28px]"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Step */}
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
          Step 7 · Final Step
        </div>

        {/* Title */}
        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          Sync & Final Posting
        </h1>

        {/* Intro */}
        <p className="text-2xl text-slate-300 max-w-4xl mb-20">
          Once all mappings and validations are complete, transactions are
          securely posted into SAP Business One via the Service Layer APIs.
        </p>

        {/* Core message */}
        <div className="grid grid-cols-2 gap-24">
          {/* Left */}
          <FadeIn frame={frame} start={20}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Execution
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>• Single-click execution of final sync</li>
                <li>• Validated transactions created or updated in SAP B1</li>
                <li>• Bulk posting through SAP Service Layer APIs</li>
              </ul>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn frame={frame} start={32}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Outcome
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>• Accurate and consistent financial data</li>
                <li>• Complete audit trail for every transaction</li>
                <li>• High operational efficiency at scale</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Final emphasis */}
        <div
          className="mt-20 border-l-4 pl-6"
          style={{ borderColor: "#60A5FA" }}
        >
          <p className="text-xl text-slate-200 max-w-4xl">
            This final sync ensures that only validated, fully mapped
            transactions are posted into SAP Business One — delivering
            reliability, compliance, and control across the entire integration
            lifecycle.
          </p>
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
