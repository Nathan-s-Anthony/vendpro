import BuyOrder from "@/app/components/buyOrder";
import PieChartGraph from "@/app/components/graphs/pieChart";
import Panel from "@/app/components/panels/panel";

export default function SourceCargo() {
    return (
        <Panel heading={"Source cargo"} pageName={"source-cargo"} subHeading={"Get a bang for your buck"} highlight={""}>
            {/* <SelectTiles /> */}
            <PieChartGraph />
            <BuyOrder />
        </Panel>
    )
}