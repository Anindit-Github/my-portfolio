import Button from "@/components/Shared/Button"
import { HeroName, HeroDescriptionCard } from '@/components/Hero'
import { ImageCard } from "@/components/Shared"
import Social from "@/components/Shared/Social"
import { Scaffold } from "../Shared/Scaffold"
export default function HeroSection() {
    return (
        <Scaffold>
            <div className="flex gap-6 border justify-between">
                <div>
                    <HeroName />
                    <HeroDescriptionCard />
                    <div className="flex w-full justify-center md:justify-start">
                        <Button text={"View Projects"} color={"cyan"} component={"{}"} />
                        <Button text={"Contact Me"} color={"gray"} />
                    </div>
                    <Social />
                </div>
                <div className="justify-end">
                    <ImageCard height={500} width={400} caption="developer_profile.ts" showAbsContent={true} imgName="HeroChar" />
                </div>
            </div>
        </Scaffold>
    )
}