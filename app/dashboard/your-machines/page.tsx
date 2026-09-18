import Panel from "@/app/components/panels/panel";
import SubPanels from "@/app/components/panels/subPanels";


export default function YourMachines() {
    return (
        <Panel heading={"Your Machines"} subHeading={"All your vending machines telemetry data under one roof"} pageName={"your-machines"}>
            <SubPanels panelMode={"full-with-tabs"} />
        </Panel>
    )
}