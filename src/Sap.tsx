import { Html5Video, Sequence, staticFile, useCurrentFrame, interpolate, useVideoConfig } from "remotion";
import SAPOverview from "./components/ui/intro";
import { AnimatedSlide } from "./components/animte";
import SAPFetchData from "./components/ui/fetch";
import SAPConfiguration from "./components/ui/sapComfig";
import SAPBranchWarehouseMapping from "./components/ui/sapWareHouse";
import BranchWarehouseTable from "./components/ui/maketplace";
import SAPBusinessPartnerMapping from "./components/ui/business";

import SideInfoPanel from "./components/ui/allBp";
import { AnimatedZoom } from "./components/anime2";
import SAPStockItemMapping from "./components/ui/stock";
import SAPSerialNumberValidation from "./components/ui/seialnumber";
import SAPFinalSync from "./components/ui/sync";
import {  DeepEcomSimpleSlide } from "./components/ui/final";

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

  return <div style={{ flex: 1, backgroundColor: "white" }}>
    {/* INTRO */}
    <Sequence from={0} durationInFrames={170}>
      <AnimatedZoom durationInFrames={170}>
        <SAPOverview />
      </AnimatedZoom>
    </Sequence>

    {/* VIDEO */}
    <Sequence from={150} durationInFrames={100}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video src={staticFile("SAP-1.mp4")}

          style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",
          }} />
      </div>
    </Sequence>

    <Sequence from={250} durationInFrames={170}>
      <AnimatedSlide durationInFrames={160}>
        <SAPFetchData />
      </AnimatedSlide>
    </Sequence>

    <Sequence from={405} durationInFrames={150}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={80}
          trimAfter={200}
          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence>

    <Sequence from={540} durationInFrames={170}>
      <AnimatedSlide durationInFrames={170}>
        <SAPConfiguration />
      </AnimatedSlide>
    </Sequence>

    <Sequence from={692} durationInFrames={100}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={250}
          trimAfter={350}
          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence>

    <Sequence from={750} durationInFrames={170}>
      <AnimatedSlide durationInFrames={170}>
        <SAPBranchWarehouseMapping />
      </AnimatedSlide>
    </Sequence>


    <Sequence from={900} durationInFrames={200}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={350}
          trimAfter={700}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

    <Sequence from={980} durationInFrames={60}>
      <AnimatedSlide durationInFrames={50}>
        <BranchWarehouseTable />
      </AnimatedSlide>
    </Sequence>

    <Sequence from={1073} durationInFrames={170}>
      <AnimatedSlide durationInFrames={170}>
        <SAPBusinessPartnerMapping />
      </AnimatedSlide>
    </Sequence>


    <Sequence from={1230} durationInFrames={200}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={600}
          trimAfter={800}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

    <Sequence from={1260} durationInFrames={120}>
      <AnimatedZoom durationInFrames={120}>

        <SideInfoPanel
          title="Business Partner Rules"
          items={[
            "B2C partners are marketplace & state-wise",
            "B2B partners are created per transaction",
            "GST data drives partner creation",
            "Ensures compliant receivables posting",
          ]}
        />
      </AnimatedZoom>

    </Sequence>

    <Sequence from={1420} durationInFrames={120}>
      <AnimatedSlide durationInFrames={120}>
        <SAPStockItemMapping />
      </AnimatedSlide>

    </Sequence>

    <Sequence from={1520} durationInFrames={200}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={1600}
          trimAfter={1800}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

    <Sequence from={1703} durationInFrames={120}>
      <AnimatedZoom durationInFrames={120}>
        <SAPSerialNumberValidation />
      </AnimatedZoom>

    </Sequence>


    <Sequence from={1820} durationInFrames={200}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={3300}
          trimAfter={3800}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >
    <Sequence from={2000} durationInFrames={120}>
      <AnimatedSlide durationInFrames={120}>
        <SAPFinalSync />
      </AnimatedSlide>
    </Sequence>


    <Sequence from={2120} durationInFrames={100}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={3800}
          trimAfter={3900}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

      <Sequence from={2200} durationInFrames={220}>
      <AnimatedSlide durationInFrames={220}>
        <DeepEcomSimpleSlide />
      </AnimatedSlide>
    </Sequence>




    <Sequence from={2422}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={3940}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >


  </div>
}