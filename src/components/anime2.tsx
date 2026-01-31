import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

type AnimatedZoomProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export function AnimatedZoom({
  children,
  durationInFrames,
}: AnimatedZoomProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // -------------------------
  // ENTER
  // -------------------------
  const scaleIn = spring({
    frame,
    fps,
    from: 0.9,
    to: 1,
    config: {
      damping: 18,
      stiffness: 120,
    },
  });

  const opacityIn = interpolate(
    frame,
    [0, 15],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

  // -------------------------
  // EXIT
  // -------------------------
  const exitStart = durationInFrames - 20;

  const scaleOut = interpolate(
    frame,
    [exitStart, durationInFrames],
    [1, 0.95],
    { extrapolateLeft: "clamp" }
  );

  const rotateOut = interpolate(
    frame,
    [exitStart, durationInFrames],
    [0, -5],
    { extrapolateLeft: "clamp" }
  );

  const opacityOut = interpolate(
    frame,
    [exitStart + 5, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        transform: `
          scale(${scaleIn * scaleOut})
          rotate(${rotateOut}deg)
        `,
        opacity: opacityIn * opacityOut,
      }}
    >
      {children}
    </div>
  );
}
