import { useCurrentFrame, interpolate } from "remotion";

export default function SAPBusinessPartnerMapping() {
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
          Step 4
        </div>

        {/* Title */}
        <h1 className="text-6xl font-semibold tracking-tight mb-6">
          Business Partner Mapping
        </h1>

        {/* Intro */}
        <p className="text-2xl text-slate-300 max-w-4xl mb-20">
          This step manages customer (Sundry Debtor) creation and mapping in
          SAP Business One based on the nature of marketplace transactions.
        </p>

        {/* Main content */}
        <div className="grid grid-cols-2 gap-24">
          {/* B2C */}
          <FadeIn frame={frame} start={20}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 mb-4">
                B2C Transactions
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Business Partners are created marketplace and state-wise
                </li>
                <li>
                  • Examples:{" "}
                  <span className="text-white font-medium">
                    AMAZON IN – MH, AMAZON IN – KA
                  </span>
                </li>
                <li>
                  • Seller receivable is indirectly from the marketplace
                </li>
                <li>
                  • Simplifies accounting for high-volume consumer sales
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* B2B */}
          <FadeIn frame={frame} start={32}>
            <div>
              <div className="text-xs tracking-widest uppercase text-blue-400 ">
                B2B Transactions
              </div>

              <ul className="space-y-4 text-xl text-slate-200">
                <li>
                  • Individual Business Partners created per transaction
                </li>
                <li>
                  • Based on GST and registration details from marketplace
                </li>
                <li>
                  • Ensures customer-level traceability and compliance
                </li>
                <li>
                  • Enables accurate tax and receivable accounting
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom emphasis */}
        <div
          className="mt-10 border-l-4 pl-6"
          style={{ borderColor: "#60A5FA" }}
        >
          <p className="text-xl text-slate-200 max-w-4xl">
            This approach ensures statutory compliance while applying the
            correct accounting treatment for both B2C and B2B marketplace
            transactions.
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
