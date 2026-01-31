import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

type AnimatedSlideProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export function AnimatedSlide({
  children,
  durationInFrames,
}: AnimatedSlideProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------
  // ENTER (first 15 frames)
  // -------------------------
  const enterY = spring({
    frame,
    fps,
    from: 24,
    to: 0,
    config: {
      damping: 22,
      stiffness: 140,
    },
  });

  const enterOpacity = interpolate(
    frame,
    [0, 12],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // -------------------------
  // EXIT (last 20 frames)
  // -------------------------
  const exitStart = durationInFrames - 20;

  const exitX = interpolate(
    frame,
    [exitStart, durationInFrames],
    [0, -120],
    { extrapolateLeft: "clamp" }
  );

  const exitOpacity = interpolate(
    frame,
    [exitStart + 8, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `translate(${exitX}px, ${enterY}px)`,
        opacity: enterOpacity * exitOpacity,
      }}
    >
      {children}
    </div>
  );
}
