"use client";

import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, BarChart, ResponsiveContainer, createHorizontalChart, AnimationControllerProvider, LineChart, Line, AnimationHandle, AnimationController, CancelableTimeout, OnAnimationStateUpdate } from "recharts";


export default function Graph({ data }: { data: any[] }) {

    const Typed = createHorizontalChart<(typeof data)[0]>()({ Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend });
    const scrollAnimationController: AnimationController = (
        _timeoutController,
        animationHandle,
        listener,
    ): CancelableTimeout => {

        let animationFrame: number;

        const animate = () => {
            const duration = animationHandle.getAnimationDuration();

            const startTime = performance.now();

            const play = (currentTime: number) => {
                const elapsed = currentTime - startTime;

                const progress = Math.min(elapsed / duration, 1);

                animationHandle.tick(progress * duration);

                listener(animationHandle.getInterpolated());

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(play);
                }
            };

            animationFrame = requestAnimationFrame(play);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    };

    const stockLevel = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 2000 },
        { name: "Apr", sales: 2780 },
    ]
    return (
        // <AnimationControllerProvider value={scrollAnimationController}>
        <Typed.BarChart
            style={{
                width: "100%",
                height: "500px",
                maxWidth: 500,
                aspectRatio: 1.618,
            }}

            data={stockLevel}

        >
            <CartesianGrid />

            <Typed.XAxis dataKey="name" />

            <Typed.YAxis width="auto" />

            <Typed.Tooltip />

            <Legend />

            <Typed.Bar
                fill="#0ea5e9"
                fillOpacity={0.85}
                stroke="#0369a1"
                strokeWidth={2}
                dataKey="sales"
                activeBar
                radius={[10, 10, 0, 0]}
            />
            <Typed.Bar
                fill="#0ea5e9"
                fillOpacity={0.85}
                stroke="#0369a1"
                strokeWidth={2}
                radius={4}
                barSize={30}
                dataKey="name"
                activeBar
            />
        </Typed.BarChart>
        // </AnimationControllerProvider>
    )
}