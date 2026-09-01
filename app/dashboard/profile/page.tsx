import Card from "@/app/components/card";
import Panel from "@/app/components/panel";

export default function Profile() {

    return (
        <Panel heading={"Profile"} subHeading={""} className={""} btnValue={"Logout"} highlight={""}>
            <Card />
        </Panel>
    )
}