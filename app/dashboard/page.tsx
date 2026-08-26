import Panel from "../components/panel";
import ToolBar from "../components/toolbar";
export default function Dashboard() {
    const navigationMenu = [
        {
            id: 0,
            name: "Overview",

        }
    ]
    return (
        <div className="grid h-screen relative overflow-hidden w-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
            <ToolBar />
            <div className="min-w-0  col-span-2 lg:col-start-2 z-10  lg:px-6 py-4">
                <Panel heading="Your stats" />
            </div>
        </div>
    )
}

export const metadata = {
    title: "Vendpro - One stop app for vendors to run their business",
    description: "Vendpro is a comprehensive platform designed to empower vendors in managing their businesses efficiently.",
};
