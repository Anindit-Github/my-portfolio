import { IconsMap } from "./common";
import { SectionId } from "./constants";

export type IconName = keyof typeof IconsMap;

export type NavLinksType = {
  id: SectionId;
  label: string;
  hasIcon: boolean;
  iconName: IconName;
};
