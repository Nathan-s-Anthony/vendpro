import Card from "@/app/components/card";
import Form from "@/app/components/form";
import EditProfileForm from "@/app/components/formTemplates/editProfileForm";
import Panel from "@/app/components/panel";


export default function Profile() {

    return (
        <Panel heading={"Profile"} pageName={"profile"} subHeading={"Edit your details"} highlight={""}>
            <EditProfileForm />
        </Panel>
    )
}