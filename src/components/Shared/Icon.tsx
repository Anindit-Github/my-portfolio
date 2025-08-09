import { IconsMap } from "@/lib/common";
import { IconName } from "@/lib/types";

// type IconProps = {
//   name: IconName;
//   className?: string;
//   width?: number | string;
//   height?: number | string;
// };

type IconProps = {
    name: IconName;
  } & React.SVGProps<SVGSVGElement>;
  

const Icon = ({ name, ...props }: IconProps) => {
  //return React.createElement(iconsMap[name], { className, width, height });
  const Component = IconsMap[name];
  return <Component {...props} />;
};


export default Icon;
