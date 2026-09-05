"use client";

import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer } from "recharts";


export default function Graph({ data }: { data: any[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={700}
                height={400}
                data={data}
            >
                <CartesianGrid />
                <XAxis dataKey="label" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="stock"
                    name="Stock"
                    radius={[10, 10, 0, 0]}
                />

                <Bar
                    dataKey="reorderPoint"
                    name="Reorder Point"
                    radius={[10, 10, 0, 0]}
                />
                {/* <RechartsDevtools /> */}
            </BarChart>
        </ResponsiveContainer>
    )
}