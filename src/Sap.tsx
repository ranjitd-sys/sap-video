import { Html5Video, Sequence, staticFile, useCurrentFrame, interpolate, useVideoConfig } from "remotion";
import SAPOverview from "./components/ui/intro";
import { AnimatedSlide } from "./components/animte";
import SAPFetchData from "./components/ui/fetch";
export function sapVideo() {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const introOpacity = interpolate(
    frame,
    [85, 100],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );

  // 🟢 Enter video
  const videoOpacity = interpolate(
    frame,
    [85, 100],
    [0, 1],
    { extrapolateRight: "clamp" }
  );

    return   <div style={{ flex: 1, backgroundColor: "white" }}>
      {/* INTRO */}
      <Sequence from={0} durationInFrames={200}>
        <div style={{ opacity: introOpacity }}>
          <SAPOverview />
        </div>
      </Sequence>

      {/* VIDEO */}
      <Sequence from={100}>
        <div style={{ opacity: videoOpacity }}>
          <Html5Video src={staticFile("sap.mp4")} />
        </div>
      </Sequence>
      {/* <Sequence from={140} durationInFrames={200}>
        <AnimatedSlide durationInFrames={100}>
            <SAPFetchData/>
        </AnimatedSlide>
      </Sequence> */}

      <Sequence from={163} durationInFrames={100}>
  <Html5Video
    src={staticFile("sap.mp4")}
    trimBefore={90}
    trimAfter={91} // render same frame repeatedly
  />
</Sequence>
    </div>
}