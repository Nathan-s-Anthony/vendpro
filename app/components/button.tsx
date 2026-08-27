export default function Button({ value }: { value: string }) {
    return (
        <button className="px-4 py-2 bg-secondary-faded rounded-sm">
            {value}
        </button>
    )
}