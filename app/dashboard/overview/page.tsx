import Card from "@/app/components/card";
import Panel from "@/app/components/panel";

export default function Overview() {
    return (
        <Panel
            heading="Your Vend Empire Overview"
            subHeading="Growth starts from the simpliest actions" className={""}
            btnValue="View Analytics" >
            <Card />
            <Card />
            <Card />
        </Panel>
    )
}