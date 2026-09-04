"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function GoogleMap() {
    return (

        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
            <Map
                style={{ width: '100%', height: '100%', }}
                defaultCenter={{ lat: -26.1076, lng: 28.0567 }}
                defaultZoom={10}
                gestureHandling='greedy'
                disableDefaultUI
            />
        </APIProvider>
    )
}