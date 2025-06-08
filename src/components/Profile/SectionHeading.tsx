import clsx from "clsx";
import { BookOpen, Coffee, Code } from "react-feather"

const headingToIconMap = {
    interests: {
        icon: Coffee,
        text: 'interests[ ]',
        subtitle: ''
    },
    education: {
        icon: BookOpen,
        text: 'education.map( )',
        subtitle: 'Academic background'
    },
    constructor: {
        icon: Code,
        text: 'constructor( )',
        subtitle: 'Initializing my developer journey'
    }
}

export const SectionHeading = ({ text }: { text: keyof typeof headingToIconMap }) => {
    const {icon: Icon, text: title, subtitle} = headingToIconMap[text];

    return (

    <div className="heading flex m-5">
        <div className = {
            clsx(
                'icon p-2 bg-cyan-950 rounded-lg self-start',
                title === 'education' && 'text-blue-500',
                title === 'interests' && 'text-purple-500',
                title === 'constructor' && ''
            )
        }>
            <Icon size={18} />
        </div>
        <div className="constructor font-mono font-bold ml-3">
            <div className="text-xl">{title}</div>
            <div className="text-[12px] ">{subtitle}</div>
        </div>
    </div>
    )
}