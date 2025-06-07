"use client"
import * as motion from "motion/react-client"
import { techStack } from "@/lib/constants";
import { MacButtons } from "../Shared";
import Icon from "../Shared/Icon";
import { springTransition } from "@/lib/common";
import { Variants } from "motion/react";

const techIconVariant: Variants = {
    offscreen: {
        x:-30,
        opacity: 0,
    },
    onscreen: (custom) => ({
        x: 0,
        opacity: 1,
        transition: springTransition(custom?.delay || 0, 0.5),
    }),
}

export const TechSection = () =>  {

    return (
        <div className="container font-mono text-zinc-300 w-full my-10 backdrop-blur-3xl border border-white/10 rounded-xl 
        bg-gradient-to-br from-sky-950 via-slate-900 to-gray-900">
            <div className="heading-container m-6 h-12 border-b-2 border-b-white/5 flex justify-between">
                <div className="flex">
                    <div className="text-sm font-bold rounded-t-lg bg-slate-900 py-2 px-3 mb-2">
                        technologies.ts
                    </div>
                    <div className="text-sm font-bold py-2 px-3 mb-2">
                        constants.ts
                    </div>
                </div>
                <div className="self-start">
                    <MacButtons />
                </div>
            </div>

            <div className="body-container flex">
                <div className="markdown ml-6 pr-4 h-full font-extrabold font-mono text-[11px] text-zinc-400 border-r-1 border-r-white/5">
                    <div className="pb-1">1</div>
                    <div className="pb-1">2</div>
                    <div className="pb-1">3</div>
                    <div className="pb-1">4</div>
                    <div className="pb-1">5</div>
                    <div className="pb-1">6</div>
                    <div className="pb-1">7</div>
                    <div className="pb-1 pb-8">8</div>
                </div>

                <div className="tech-stack-container ml-6 w-full">
                    <p className="text-sm text-indigo-500 font-bold">
                        const technologies = {'['}
                    </p>

                    <div
                        className="flex flex-wrap my-4"

                    >
                        {(Object.keys(techStack) as Array<keyof typeof techStack>).map((tech, index) => (

                            <motion.div key={index} className="flex w-1/4 py-2"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ amount: 0.2 }}
                                variants={techIconVariant}
                                custom={{ delay: index * 0.6 }}
                            >
                                <div className="rounded-xl bg-slate-900 border-1 border-white/10 p-3 mr-3 ">
                                    <Icon name={tech} width={22} height={22} className="text-blue-500" />
                                </div>
                                <div className="py-3">{techStack[tech]}</div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-sm text-indigo-500 font-bold pt-3 pb-6">
                        {']'};
                    </p>
                </div>
            </div>
        </div>
    )
}

