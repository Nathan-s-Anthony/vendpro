import Modal from "@/app/components/modal";
import Panel from "@/app/components/panel";


export default function YourMachines() {
    return (
        <Panel heading={"Your Machines"} subHeading={"All your vending machines telemetry data under one roof"} pageName={"your-machines"}>
            <Modal />
        </Panel>
    )
}