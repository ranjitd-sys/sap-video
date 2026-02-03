import {
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";

type FinalRevealProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export function FinalReveal({
  children,
  durationInFrames,
}: FinalRevealProps) {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();

  // 1. Entrance: Springy Slide Up + Scale
  const entranceSpring = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
      mass: 0.8,
    },
  });

  // Moves from 100px below to 0
  const translateY = interpolate(entranceSpring, [0, 1], [100, 0]);
  // Scales from 0.8 to 1
  const scaleIn = interpolate(entranceSpring, [0, 1], [0.8, 1]);
  
  const opacityIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 2. Exit: Smooth "Drift" and Fade
  // We start the exit 30 frames before the end
  const exitStart = durationInFrames - 30;
  
  const exitProgress = interpolate(
    frame,
    [exitStart, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp" }
  );

  // Subtle drift upward and slight expansion as it disappears
  const exitTranslateY = interpolate(exitProgress, [0, 1], [0, -50]);
  const exitScale = interpolate(exitProgress, [0, 1], [1, 1.1]);
  const opacityOut = interpolate(exitProgress, [0, 0.7], [1, 0]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: opacityIn * opacityOut,
        transform: `
          translateY(${translateY + exitTranslateY}px) 
          scale(${scaleIn * exitScale})
        `,
      }}
    >
      {children}
    </div>
  );
}