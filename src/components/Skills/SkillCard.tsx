import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { springTransition } from "@/lib/common";
import clsx from "clsx";
import { Skills } from "./Skills";


const cardVariant: Variants = {
    offscreen: {
        y: 40,
        opacity: 0.0
    },
    onscreen: (custom) => ({
        y: 0,
        opacity: 1,
        transition: springTransition(custom?.delay || 0, 0.5),
    }),
}



export const SkillCard = ({ domain, skillInfo, custom }: { domain: string, skillInfo: Array<{ name: string, percent: number }>, custom: { delay: number }; }) => {
    return (
        <motion.div
            className={clsx(
                'w-[320px] px-6 py-8 rounded-xl bg-gradient-to-br text-white font-mono shadow-lg relative overflow-hidden border border-gray-700 backdrop-blur-md',
                domain === 'FrontendDeveloper' && 'from-cyan-950 via-slate-900 to-gray-900',
                domain === 'BackendDeveloper' && 'from-blue-950 via-slate-900 to-gray-950',
                domain === 'DevOpsDeveloper' && 'from-purple-950 via-stone-950 to-gray-950',

            )}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.2 }}
            variants={cardVariant}
            custom={custom}
        >
            <Skills domain={domain} skillInfo={skillInfo} />
        </motion.div>


    )

}
