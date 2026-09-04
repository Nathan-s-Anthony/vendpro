import GoogleMap from "@/app/components/map";

export default function Locations() {
    return (
        <div className="grid lg:grid-cols-2 h-full ">
            <GoogleMap />
            <div>
                <h1>Your locations</h1>
            </div>
        </div>

    )
}