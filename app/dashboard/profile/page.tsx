import Card from "@/app/components/card";
import Panel from "@/app/components/panel";

export default function Profile() {
    return (
        <Panel heading="Your profile" subHeading="Change details" className={""} btnValue={"Edit"} >
            <Card />
        </Panel>
    )
}