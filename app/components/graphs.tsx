"use client";

import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer, createHorizontalChart, AnimationControllerProvider, LineChart, Line } from "recharts";


export default function Graph({ data }: { data: any[] }) {

    return (
        <LineChart style={{ width: '100%', aspectRatio: 1.618, height: "100%" }} responsive data={data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis width="auto" />
            <Line type="monotone" dataKey="uv" />
            <Line type="monotone" dataKey="pv" />
            <Legend position="insideTopRight" offset={20} />
            {/* <RechartsDevtools /> */}
        </LineChart>
    )
}