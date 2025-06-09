import Image from "next/image";
import {MacButtons} from "./MacButtons";

type ImageCardProps = {
  height: number;
  width: number;
  caption: string;
  showAbsContent: boolean;
  imgName: string;
};

export const ImageCard = ({
  height,
  width,
  caption,
  showAbsContent,
  imgName,
}: ImageCardProps) => {
  return (
    <div
      className="relative mx-auto md:mx-0"
      style={{ width: `${width}px` }} // 🔧 Set dynamic width
    >
      {/* Outer Shell */}
      <div className="rounded-lg w-full border-t border-white/20 overflow-hidden">
        {/* Top Bar */}
        <div className="relative flex justify-between items-center rounded-t-lg w-full h-8 bg-gray-800 px-2">
          <MacButtons />
          <div className="absolute left-1/2 transform -translate-x-1/2 text-[12px] font-mono text-zinc-400">
            {caption}
          </div>
        </div>

        {/* Responsive Image */}
        <div
          className="relative w-full"
          style={{ height: `${height}px` }} // 🔧 Set dynamic height
        >
          <Image
            src={`/${imgName}.png`}
            alt={caption}
            fill
            className="object-cover rounded-b-lg"
            sizes={`${width}px`}
          />
        </div>
      </div>

      {/* Absolute Badge */}
      {showAbsContent && (
          <div className="absolute text-sm top-[99%] right-0 border border-white/10 px-4 py-1 rounded-lg text-purple-500 bg-gray-800 whitespace-nowrap">
          # Professional & Passionate
        </div>
      )}
    </div>
  );
};

  