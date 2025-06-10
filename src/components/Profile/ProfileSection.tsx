import { descTile } from "@/lib/data";
import { Button, ImageCard } from "../Shared";
import { ProfileDescription } from "./ProfileDescription";
import { DescTile } from "./DescTile";
import { SectionDetail } from "@/components/Profile/types";
import { SectionHeading } from "./SectionHeading";
import { UserProfile } from "./UserProfile";
import { UserProfileInfo } from "@/lib/constants";

export default function ProfileSection() {
    return (

        <div className="flex flex-col items-center w-full px-4 sm:px-6">
            <div className="w-full max-w-5xl">
                <ProfileDescription />

            </div>
            <div className="w-full max-w-5xl  md:grid md:grid-cols-6 gap-x-6 md:grid-rows-2">
                <div className="flex justify-center px-2 sm:px-4 md:px-0 col-span-2">
                    <ImageCard height={350} width={300} caption="profile.jpeg" showAbsContent={false} imgName="ProfilePic" />
                </div>
                <div className="container font-mono text-zinc-300 w-full backdrop-blur-3xl border border-white/10 rounded-xl col-span-4">
                    <SectionHeading text="constructor" />
                    <div className="profile-content m-5 border-l-2 border-l-white/10 pl-4 font-bold text-md">
                        {UserProfileInfo.map((content, index) => (
                            <p key={index} className="mb-3">
                                {content}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="md:w-[300px] md:ml-3 col-span-2 font-mono text-zinc-300 mx-auto">
                    <UserProfile />
                </div>
                <div className="md:grid col-span-4 grid-cols-5 gap-x-4">
                    <div className="education font-mono  my-4 text-zinc-300 backdrop-blur-3xl border border-white/10 rounded-xl col-span-3">
                        <SectionHeading text='education' />
                        {descTile.education.map((item: SectionDetail, index) => (
                            <DescTile key={index} sectionDetail={item} />
                        ))}

                    </div>
                    <div className="interests flex-1 font-mono my-4 text-zinc-300 backdrop-blur-3xl border border-white/10 rounded-xl col-span-2">
                        <SectionHeading text='interests' />
                        {descTile.interests.map((item: SectionDetail, index) => (
                            <DescTile key={index} sectionDetail={item} />
                        ))}
                    </div>

                </div>

            </div>

        </div>
    )
}