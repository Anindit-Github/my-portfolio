import Image from 'next/image'
import HeroImg from '../../../public/HeroChar.png'
import { clsx } from 'clsx';
import { MAC_BUTTON_ORDER } from '@/lib/constants'

export default function HeroImageCard() {
    return (
        <>

            <div className='relative w-[410px]'>
                <div className='rounded-lg w-[400px] border-t border-white/20'>
                    <div className='relative flex justify-between items-center rounded-t-lg w-full h-8 bg-gray-800'>
                        <div className='inline-flex gap-1 px-2 items-center'>
                            {MAC_BUTTON_ORDER.map((color) => (
                                <div
                                    key={color}
                                    className={clsx(
                                        'rounded-full h-3 w-3',
                                        color === 'RED' && 'bg-red-500',
                                        color === 'YELLOW' && 'bg-yellow-500',
                                        color === 'GREEN' && 'bg-green-500'
                                    )}></div>
                            ))}

                        </div>

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