import Button from "@/components/Shared/Button"
import { HeroName, HeroDescriptionCard } from '@/components/Hero'
import { ImageCard } from "@/components/Shared"
import Social from "@/components/Shared/Social"
import { Scaffold } from "../Shared/Scaffold"
export default function HeroSection() {
    return (
        <div className="flex w-full justify-center">
            <div className="w-full max-w-5xl grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-8 md:justify-between p-4">

                <div className="">
                    <HeroName />
                    <HeroDescriptionCard />
                    <div className="flex w-full justify-center md:justify-start">
                        <Button text={"View Projects"} color={"cyan"} component={"{}"} />
                        <Button text={"Contact Me"} color={"gray"} />
                    </div>
                    <Social />
                </div>
                <div className="flex md:justify-end justify-center px-2 sm:px-4 md:px-0">
                    <ImageCard
                        height={500}
                        width={400}
                        caption="developer_profile.ts"
                        showAbsContent={true}
                        imgName="HeroChar"
                    />
                </div>
            </div>

        </div>

    )
}