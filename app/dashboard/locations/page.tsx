import GoogleMap from "@/app/components/map";
import Panel from "@/app/components/panels/panel";
import SubPanels from "@/app/components/panels/subPanels";

export default function Locations() {
    return (
        <Panel className="z-20" heading={"locations"} subHeading={"network"} pageName={"locations"}>
            <SubPanels />
        </Panel>
    )
}