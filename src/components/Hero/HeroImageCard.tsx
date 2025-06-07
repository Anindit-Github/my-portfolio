import Image from 'next/image'
import HeroImg from '../../../public/HeroChar.png'
import { MacButtons } from '@/components/Shared';

export const HeroImageCard = () => {
    return (
        <>

            <div className='relative w-[410px]'>
                <div className='rounded-lg w-[400px] border-t border-white/20'>
                    <div className='relative flex justify-between items-center rounded-t-lg w-full h-8 bg-gray-800'>
                        <MacButtons />

                        <div className='text-sm text-zinc-400 absolute left-1/2 transform -translate-x-1/2'>developer_profile.ts</div>
                    </div>
                    <Image src={HeroImg}
                        alt=""
                        width={400}
                        height={500}
                    />
                </div>
                <div className='absolute text-sm top-103 right-0 border border-white/10 px-4 py-1 rounded-lg text-purple-500 bg-gray-800'># Professional & Passionate</div>
            </div>
        </>

    )
}