import BuyOrder from "@/app/components/buyOrder";
import Panel from "@/app/components/panels/panel";
import SelectTiles from "@/app/components/selectTiles";

export default function SourceCargo() {
    return (
        <Panel heading={"Source cargo"} pageName={"source-cargo"} subHeading={"Get a bang for your buck"} highlight={""}>
            {/* <SelectTiles /> */}
            <BuyOrder />
        </Panel>
    )
}