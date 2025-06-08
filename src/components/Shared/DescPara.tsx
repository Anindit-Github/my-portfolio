export const DescPara = ({text}:{text: string}) => {
    return (
        <p className="text-[14px] text-zinc-400 border-l-2 border-zinc-600 p-4 my-4 max-w-[600px]">
            {text}
        </p>
    )
}