import Bars from "@/app/components/bars";
import EditProfileForm from "@/app/components/formTemplates/editProfileForm";
import Panel from "@/app/components/panels/panel";
import type { Bar } from "@/app/types/barTypes";

export default function Profile() {
    const data = [
        {
            id: 0,
            value: 30,
            text: "Logins",
            total: 100,
        },
        {
            id: 1,
            value: 40,
            text: "Hours logged",
            total: 60,
        },
        {
            id: 2,
            value: 60,
            text: "Saved on cargo",
            total: 10000,

        }
    ] satisfies Bar[];

    return (
        <Panel heading={""} pageName={"profile"} subHeading={""} highlight={""} disableHeadings>
            <div className="w-3/3 grid lg:grid-cols-2 grid-cols-1">
                <EditProfileForm />
                <div className="flex flex-col gap-4 rounded-sm  mb-4 mt-4 justify-end ">
                    <h1 className="text-5xl">Your Goals for the week</h1>
                    <div className="h-full w-2/3 p-6 bg-[#222225]  2xl:self-start self-end">
                        <Bars data={data} />
                    </div>
                </div>
            </div>
        </Panel>
    )
}