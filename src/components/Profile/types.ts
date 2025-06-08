export type TileSection = "university" | "singing" | "sketching" | "education" | "certification" | "interests" | "travelling";

export type SectionDetail = {
    section: TileSection;
    iconColor: string,
    details: {
      info: string;
      from: string;
      year?: number;
    };
  };