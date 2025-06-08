import Image from 'next/image'
import { MacButtons } from '@/components/Shared';

export const ImageCard = ({height, width, caption, showAbsContent, imgName}: {height: number, width:number, caption:string, showAbsContent: boolean, imgName: string}) => {
    const containerWidth = width + 10;
    return (
        <>

            <div className='relative w-[410px]' style={{width: containerWidth + 'px'}}>
                <div className='rounded-lg w-[400px] border-t border-white/20' style={{width: width + 'px'}}>
                    <div className='relative flex justify-between items-center rounded-t-lg w-full h-8 bg-gray-800'>
                        <MacButtons />

                        <div className='text-[12px] font-mono text-zinc-400 absolute left-1/2 transform -translate-x-1/2'>{caption}</div>
                    </div>
                    <Image 
                        className='rounded-b-lg'
                        src={`/${imgName}.png`}
                        alt=""
                        width={width}
                        height={height}
                    />
                </div>
                {showAbsContent && <div className='absolute text-sm top-103 right-0 border border-white/10 px-4 py-1 rounded-lg text-purple-500 bg-gray-800'># Professional & Passionate</div>}
            </div>
        </>

    )
}