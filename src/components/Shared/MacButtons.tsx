import { MAC_BUTTON_ORDER } from "@/lib/constants"
import { clsx } from "clsx"

export const MacButtons = () => {
    return (
        <div className='inline-flex gap-1 px-2 items-center'>
            {MAC_BUTTON_ORDER.map((color) => (
                <div
                    key={color}
                    className={clsx(
                        'rounded-full h-3 w-3',
                        color === 'RED' && 'bg-red-500',
                        color === 'YELLOW' && 'bg-yellow-500',
                        color === 'GREEN' && 'bg-green-500'
                    )}></div>
            ))}

        </div>
    )
}