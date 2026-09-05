import EditProfileForm from "@/app/components/formTemplates/editProfileForm";
import Panel from "@/app/components/panels/panel";

export default function Profile() {
    return (
        <Panel heading={""} pageName={"profile"} subHeading={""} highlight={""} disableHeadings>
            <div className="w-3/3 grid lg:grid-cols-2 grid-cols-1">
                <EditProfileForm />
                <div className="flex flex-col gap-4 rounded-sm  mb-4 mt-4 justify-between">
                    <h1 className="text-5xl">Your Stats for the month</h1>
                    <div className="h-full w-2/3 p-6 bg-[#222225]">
                        test
                    </div>
                </div>
            </div>
        </Panel>
    )
}