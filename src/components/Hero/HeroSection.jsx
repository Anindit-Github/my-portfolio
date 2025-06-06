import Button from "@/components/Shared/Button"
import HeroName from '@/components/Hero/HeroName'
import HeroDescriptionCard from "@/components/Hero/HeroDescriptionCard"
import HeroImageCard from "@/components/Hero/HeroImageCard"
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