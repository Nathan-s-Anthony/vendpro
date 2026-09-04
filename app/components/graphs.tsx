"use client";

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function Graphs({ data }: { data: [] }) {
    return (
        <LineChart
            style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
            responsive
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 0,
            }}
        >
            <CartesianGrid strokeDasharray="5 5" />
            <Line type="monotone" dataKey="uv" strokeWidth={2} name="My data series name" />
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: 'UV', position: 'insideLeft', angle: -90 }} />
            <Legend position="insideBottomRight" />
            <Tooltip />
            {/* <RechartsDevtools /> */}
        </LineChart>
    )
}