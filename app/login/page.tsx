import Form from "@/app/components/form";
import SubHeading from "../components/subHeading";

export default function Login({ heading, subHeading }: { heading: string, subHeading: string }) {
    return (
        <div className="w-screen min-w-screen min-h-screen grid grid-cols-2 h-screen bg-blue-500">
            <div className="bg-green-500">
                Left tile
            </div>
            <div className="">
                <SubHeading heading={'sign in to dashboard'} subHeading={"secure access"} />
                <Form />
            </div>
        </div>
    )
}