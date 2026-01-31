import { useCurrentFrame, interpolate } from "remotion";

export default function SAPConfiguration() {
  const frame = useCurrentFrame();

  return (
    <div
      className="w-full h-full flex items-center justify-center text-white font-sans relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px at 15% 15%, #020617 0%, #000000 70%)",
      }}
    >
      {/* Subtle ambient glow */}
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
        {/* Step indicator */}
        <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
          Step 2
        </div>

        {/* Title */}
        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          SAP Configuration
        </h1>

        {/* Context */}
        <p className="text-2xl text-slate-300 max-w-4xl mb-20">
          Securely connect to SAP Business One and define the target company
          for transaction posting.
        </p>

        {/* Two-column content */}
        <div className="grid grid-cols-2 gap-24">
          {/* Left */}
          <FadeIn frame={frame} start={20}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Secure connection
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>• User authenticates using SAP credentials</li>
                <li>• Connection is established via SAP Service Layer</li>
                <li>• Secure session is created with SAP Business One</li>
              </ul>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn frame={frame} start={32}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                Company database
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Correct <span className="text-white font-medium">Company Database</span> is selected
                </li>
                <li>• Transactions are routed to the intended SAP company</li>
                <li>• Prevents cross-company data contamination</li>
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
