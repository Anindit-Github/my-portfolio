import { ReactIcon, NodeIcon, JsIcon, HtmlIcon, CSSIcon, AWSIcon } from '@/components/Shared/AllIcons';


// Fixing icons object to store components, not elements:
const iconsMap = {
    react: ReactIcon,
    node: NodeIcon,
    javascript: JsIcon,
    html: HtmlIcon,
    css: CSSIcon,
    aws: AWSIcon
  };

type IconName = keyof typeof iconsMap;

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
  const Component = iconsMap[name];
  return <Component {...props} />;
};


export default Icon;
