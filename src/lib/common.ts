import {
  ReactIcon,
  NodeIcon,
  JsIcon,
  HtmlIcon,
  CSSIcon,
  AWSIcon,
} from "@/components/Shared/AllIcons";
import { Code, GitHub, Terminal } from "react-feather";

export const springTransition = (delay = 0, duration = 0.5) => ({
  type: "spring",
  bounce: 0.3,
  duration: duration + delay,
  ease: [0, 0.71, 0.2, 1.01],
});

// Fixing icons object to store components, not elements:
export const IconsMap = {
  react: ReactIcon,
  node: NodeIcon,
  javascript: JsIcon,
  html: HtmlIcon,
  css: CSSIcon,
  aws: AWSIcon,
  github: GitHub,
  hero: Terminal,
  skills: Code,
  default: Terminal
};
