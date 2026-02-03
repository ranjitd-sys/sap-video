import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

export default function SAPOverview() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = spring({
    frame,
    fps,
    from: 20,
    to: 0,
    config: {
      damping: 22,
      stiffness: 140,
    },
  });

  return (
    <div
      style={{
        width: "",
        height: "100%",
        position: "relative",
        background:
          "radial-gradient(1200px at 15% 15%, #0B1220 0%, #020617 70%)",
        color: "white",
        fontFamily: "Inter, system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        opacity,
      }}
    >
      {/* Soft background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(600px at 20% 20%, rgba(96,165,250,0.15), transparent 60%)",
        }}
      />

      {/* Glass container (THIS is the blur) */}
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          padding: "64px 72px",
          transform: `translateY(${translateY}px)`,
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#60A5FA",
            marginBottom: 16,
          }}
        >
          Integration Overview
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            marginBottom: 24,
          }}
        >
          Marketplace → SAP Business One
        </h1>

        {/* Context */}
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            color: "#CBD5E1",
            maxWidth: 820,
            marginBottom: 32,
          }}
        >
          This walkthrough demonstrates how marketplace transactions are
          synchronized into SAP Business One, as shown in the accompanying video.
        </p>

        {/* Objective */}
        <div
          style={{
            borderLeft: "3px solid #60A5FA",
            paddingLeft: 24,
            marginBottom: 64,
          }}
        >
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.5,
              color: "#E5E7EB",
              maxWidth: 820,
            }}
          >
            The objective is to ensure{" "}
            <strong>accurate, controlled, and scalable</strong> posting of
            marketplace transactions into SAP B1, while providing users{" "}
            <strong>full visibility and control</strong> at every stage.
          </p>
        </div>

        {/* Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
          }}
        >
          <Feature title="Accuracy" value="Validated & normalized data" />
          <Feature title="Control" value="Review & trace every transaction" />
          <Feature title="Scalability" value="Built for high-volume operations" />
        </div>
      </div>
    </div>
  );
}

function Feature({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 13,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "#93C5FD",
          marginBottom: 8,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 22,
          fontWeight: 500,
          color: "#F1F5F9",
        }}
      >
        {value}
      </div>
    </div>
  );
}
