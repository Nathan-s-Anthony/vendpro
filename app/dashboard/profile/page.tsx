import EditProfileForm from "@/app/components/formTemplates/editProfileForm";
import Panel from "@/app/components/panel";

export default function Profile() {
    return (
        <Panel heading={""} pageName={"profile"} subHeading={""} highlight={""} disableHeadings>
            <EditProfileForm />
        </Panel>
    )
}