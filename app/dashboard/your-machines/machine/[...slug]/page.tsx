import MiniNav from "@/app/components/MiniNav";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const navItems = [
        {
            id: 0,
            link: "stats",
            name: "Stats"
        },
        {
            id: 1,
            link: "stock-level",
            name: "Stock Level",
        },

    ]
    return (
        <div>
            <MiniNav navItems={navItems} />
        </div>
    )
}