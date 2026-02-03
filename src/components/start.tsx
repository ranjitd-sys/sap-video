import {
  useCurrentFrame,
  interpolate,
  useVideoConfig,
  Easing,
} from "remotion";

type ModernStartProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export function ModernStart({
  children,
  durationInFrames,
}: ModernStartProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Smooth, modern entrance (0 to 30 frames)
  const progress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.33, 1, 0.68, 1), // Standard modern "Ease Out"
  });

  // Scale: 0.95 -> 1.0 (very subtle growth)
  const scale = interpolate(progress, [0, 1], [0.95, 1]);
  
  // Opacity: 0 -> 1
  const opacityIn = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 2. Exit (Simple fade away)
  const exitStart = durationInFrames - 15;
  const opacityOut = interpolate(frame, [exitStart, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        opacity: opacityIn * opacityOut,
        transform: `scale(${scale})`,
        // Clean, modern typography defaults
        fontFamily: "Inter, -apple-system, sans-serif",
        color: "black",
        textAlign: "center",
      }}
    >
      <div style={{ transform: "translateY(-5px)" }}> 
        {children}
      </div>
    </div>
  );
}