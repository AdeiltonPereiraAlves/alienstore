export interface TagProps {
    label: string
    icone: React.ElementType
    outline?: boolean
}

export default function Tag(props: TagProps) {
    return (
        <div className={`flex items-center gap-2 self-start py-1 px-4 
        rounded-full text-xs uppercase
            ${props.outline ? 'boder border-zinc-300' : 'border border-black'
            }
        `}
        >
            <props.icone size={15} />
            <span>{props.label}</span>
        </div>
    )
}