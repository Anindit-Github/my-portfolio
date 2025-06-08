import Button from "@/components/Shared/Button"
import {HeroName, HeroDescriptionCard} from '@/components/Hero'
import { ImageCard } from "@/components/Shared"
import Social from "@/components/Shared/Social"
export default function HeroSection() {
    return (
        <div className="flex justify-center w-full px-4 sm:px-6">
            <div className="w-full max-w-5xl flex gap-6 border justify-between">
            <div>
                 <HeroName />
                 <HeroDescriptionCard />
                 <div className="flex w-full justify-center md:justify-start">
                     <Button text={"View Projects"} color={"cyan"} component={"{}"}/>
                     <Button text={"Contact Me"} color={"gray"}/>
                 </div>
                 <Social/>
             </div>
             <div className="justify-end">
                 <ImageCard height={500} width={400} caption="developer_profile.ts" showAbsContent={true} imgName="HeroChar"/>
             </div>
            </div>
            </div>
    )
}