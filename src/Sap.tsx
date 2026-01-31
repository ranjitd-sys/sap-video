import { Html5Video, staticFile } from "remotion";

export function sapVideo(){
    return <div>
        <Html5Video src={staticFile("sap.mp4")}/>

    </div>
}