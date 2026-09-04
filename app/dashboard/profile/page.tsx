import Card from "@/app/components/card";
import Form from "@/app/components/form";
import Panel from "@/app/components/panel";


export default function Profile() {

    return (
        <Panel heading={"Profile"} subHeading={""} highlight={""}>
            <Card />
            <Form />
        </Panel>
    )
}