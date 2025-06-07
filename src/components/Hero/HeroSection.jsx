import Button from "@/components/Shared/Button"
import {HeroName, HeroDescriptionCard, HeroImageCard} from '@/components/Hero'
import Social from "@/components/Shared/Social"
export default function HeroSection() {
    return (
        <div className="md:flex md:justify-evenly md:gap-6">
            <div>
                <HeroName />
                <HeroDescriptionCard />
                <div className="flex w-full justify-center md:justify-start">
                    <Button text={"View Projects"} color={"cyan"} component={"{}"}/>
                    <Button text={"Contact Me"} color={"gray"}/>
                </div>
                <Social/>
            </div>
            <div>
                <HeroImageCard />
            </div>
        </div>
    )
}