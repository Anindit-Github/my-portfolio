export default function SkillCardHeading({ domain }: { domain: string }) {
    return (
        <div className="pb-6">
            <div className="text-sm text-zinc-400">export function</div>
            <div className="text-xl font-bold text-white">
                {domain}<span className="text-purple-400">()</span>
            </div>
        </div>
    )
}