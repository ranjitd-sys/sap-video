import "./index.css";
import { Composition } from "remotion";
import { sapVideo } from "./Sap";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={sapVideo}
        durationInFrames={6630}
        fps={30}
        width={1280}
        height={650}
      />
    </>
  );
};
