"use client";


export default function Button({ value, className, action }: { value: string, className: string, action?: () => (void | undefined) }) {

    return (
        <button onClick={action} className={`${className} cursor-pointer px-4 py-2 bg-secondary-faded rounded-sm`}>
            {value}
        </button>
    )
}