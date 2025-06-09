import { descTile } from "@/lib/data";
import { Button, ImageCard } from "../Shared";
import { ProfileDescription } from "./ProfileDescription";
import { DescTile } from "./DescTile";
import { SectionDetail } from "@/components/Profile/types";
import { SectionHeading } from "./SectionHeading";
import { UserProfile } from "./UserProfile";
import { UserProfileInfo } from "@/lib/constants";
import { Scaffold } from "../Shared/Scaffold";

export default function ProfileSection() {
    return (
        <Scaffold>
            <ProfileDescription />
            <div className="container font-mono text-zinc-300 w-full mt-10 backdrop-blur-3xl border-white/10 rounded-xl">
                <div className="first-row flex">
                    <ImageCard height={350} width={250} caption="profile.jpeg" showAbsContent={false} imgName="ProfilePic" />
                    <div className="container font-mono ml-6 text-zinc-300 w-full backdrop-blur-3xl border border-white/10 rounded-xl">
                        <SectionHeading text="constructor" />
                        <div className="profile-content m-5 border-l-2 border-l-white/10 pl-4 font-bold text-md">
                            {UserProfileInfo.map((content, index) => (
                                <p key={index} className="mb-3">
                                    {content}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="second-row flex ">
                    <UserProfile />
                    <div className="education w-2/5 font-mono ml-6 my-4 text-zinc-300 backdrop-blur-3xl border border-white/10 rounded-xl">
                        <SectionHeading text='education' />
                        {descTile.education.map((item: SectionDetail, index) => (
                            <DescTile key={index} sectionDetail={item} />
                        ))}

                    </div>

                    <div className="interests flex-1 font-mono ml-6 my-4 text-zinc-300 backdrop-blur-3xl border border-white/10 rounded-xl">
                        <SectionHeading text='interests' />
                        {descTile.interests.map((item: SectionDetail, index) => (
                            <DescTile key={index} sectionDetail={item} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <Button text="Download Resume" color='cyan' />
                </div>

            </div>
        </Scaffold>
    )
}