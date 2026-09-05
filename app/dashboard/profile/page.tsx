import Card from "@/app/components/card/card";
import Form from "@/app/components/form";
import EditProfileForm from "@/app/components/formTemplates/editProfileForm";
import Panel from "@/app/components/panel";
import Link from "next/link";


export default function Profile() {

    return (
        <div className="">

            <Panel heading={"Profile"} pageName={"profile"} subHeading={"Edit your details"} highlight={""}>
                <EditProfileForm />
            </Panel>
        </div >
    )
}