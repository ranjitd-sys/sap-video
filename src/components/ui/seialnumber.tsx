import { useCurrentFrame, interpolate } from "remotion";

export default function SAPSerialNumberValidation() {
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
            "radial-gradient(600px at 20% 20%, rgba(59,130,246,0.12), transparent 60%)",
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
          Step 6
        </div>

        {/* Title */}
        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          Serial Number Validation
        </h1>

        {/* Intro */}
        <p className="text-2xl text-slate-300 max-w-4xl mb-20">
          Serial numbers received from the marketplace are validated against
          SAP Business One to ensure accurate item tracking and posting.
        </p>

        {/* Main content */}
        <div className="grid grid-cols-2 gap-24">
          {/* Assigned */}
          <FadeIn frame={frame} start={20}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Assigned
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Serial numbers already existing in SAP Business One
                </li>
                <li>
                  • Linked with SAP-generated <span className="text-white font-medium">System Numbers</span>
                </li>
                <li>
                  • Ready for direct use in transaction creation
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Pending */}
          <FadeIn frame={frame} start={32}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Pending
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Serial numbers not yet available in SAP
                </li>
                <li>
                  • Exportable in <span className="text-white font-medium">CSV format</span>
                </li>
                <li>
                  • Can be imported into SAP via GRPO or other preferred methods
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom emphasis */}
        <div
          className="mt-20 border-l-4 pl-6"
          style={{ borderColor: "#60A5FA" }}
        >
          <p className="text-xl text-slate-200 max-w-4xl">
            This validation step ensures that all serial-controlled items are
            properly registered in SAP before posting, preventing stock
            inconsistencies and ensuring end-to-end traceability.
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
