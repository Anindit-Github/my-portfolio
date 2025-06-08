import { Code, User, BookOpen, Book, Award, Coffee, Music, PenTool, Compass } from "react-feather";
import clsx from "clsx";

const tileToIconMap = {
    education: BookOpen,
    university: Book,
    certification: Award,
    singing: Music,
    interests: Coffee,
    sketching: PenTool,
    travelling: Compass
}

export const DescTile = ({ sectionDetail }: {
    sectionDetail: {
        section: keyof typeof tileToIconMap, iconColor: string, details: {
            info: string,
            from: string,
            year?: number
        }
    }
}) => {

    const { section, iconColor, details: { info, from, year } } = sectionDetail;
    const Icon = tileToIconMap[section];

    return (


        <div className="flex m-5 gap-1 border-l-2 border-l-white/10">

            <div className={clsx(
                'self-center pl-2',
                iconColor === 'teal' && 'text-teal-500',
                iconColor === 'purple' && 'text-purple-500'

            )}>
                <Icon />
            </div>
            <div className="text-sm font-bold text-[12px]">
                {info}
                <p className="text-[10px]">{year ? `${from} - ${year}` : from}</p>
            </div>
        </div>
    )
}