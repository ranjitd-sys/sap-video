import { Html5Video, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
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
import { FinalReveal } from "./components/last";
import { ModernStart } from "./components/start";

export function sapVideo() {
  const frame = useCurrentFrame();
 

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
      <ModernStart durationInFrames={170}>
        <SAPOverview />
      </ModernStart>
    </Sequence>

    <Sequence from={170} durationInFrames={160}>
      <AnimatedSlide durationInFrames={160}>
        <SAPFetchData />
      </AnimatedSlide>
    </Sequence>

    {/* VIDEO */}
    <Sequence from={315} durationInFrames={100}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video src={staticFile("SAP-1.mp4")}

          style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",
          }} />
      </div>
    </Sequence>

    
    <Sequence from={415} durationInFrames={170}>
      <AnimatedSlide durationInFrames={170}>
        <SAPConfiguration />
      </AnimatedSlide>
    </Sequence>

    <Sequence from={585} durationInFrames={170}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={80}
          trimAfter={250}
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


    <Sequence from={1820} durationInFrames={470}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={3300}
          trimAfter={4000}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

    <Sequence from={2277} durationInFrames={120}>
      <AnimatedSlide durationInFrames={120}>
        <SAPFinalSync />
      </AnimatedSlide>
    </Sequence>




    




    <Sequence from={2400} durationInFrames={4021}>
      <div style={{ opacity: videoOpacity }}>
        <Html5Video
          trimBefore={6300}

          src={staticFile("SAP-1.mp4")} style={{
            transform: "translateY(-90px) ",
            height: "calc(100% + 120px)",

          }} />
      </div>
    </Sequence >

      <Sequence from={6409} durationInFrames={250}>
      <FinalReveal durationInFrames={250}>
        <DeepEcomSimpleSlide />
      </FinalReveal>
    </Sequence>

  </div>
}