import { SectionDetail } from "@/components/Profile/types";

export const skills = {
    FrontendDeveloper: [
      { name: "React.js / Next.js", percent: 90 },
      { name: "TypeScript / JavaScript", percent: 85 },
      { name: "HTML5 / CSS3", percent: 95 },
      { name: "Redux / Context API", percent: 80 },
      { name: "Tailwind / Vanilla CSS", percent: 90 },
    ],
    BackendDeveloper: [
      { name: "Node.js / Express.js", percent: 85 },
      { name: "NestJS / TypeScript", percent: 88 },
      { name: "SQL / PostgreSQL / MySQL", percent: 75 },
      { name: "NoSQL / MongoDB / DynamoDB", percent: 88 },
      { name: "RESTful APIs / GraphQL", percent: 85 },
    ],
    DevOpsDeveloper: [
      { name: "AWS (EC2, S3, Lambda)", percent: 80 },
      { name: "Docker / Kubernetes", percent: 75 },
      { name: "CI/CD (GitHub Actions)", percent: 85 },
      { name: "Git / GitHub / GitLab", percent: 90 },
      { name: "Testing (Jest, React Testing)", percent: 80 },
    ]
  };

export const descTile:Record<"education" | "interests", SectionDetail[]> = {
  education: [
    {
      section: 'university',
      iconColor: 'teal',
      details: {
        info: 'B.Tech in Electronics & Instrumentation',
        from: 'Odisha University of Technology and Research',
        year: 2025
      },
    },
    {
      section: 'certification',
      iconColor: 'purple',
      details: {
        info: 'Apollo Graphql - Associate Certification',
        from: 'Apollo',
        year: 2025
      },
    },
    {
      section: 'certification',
      iconColor: 'purple',
      details: {
        info: 'AWS Cloud Practitioner Certification',
        from: 'Amazon Web Services',
        year: 2023
      },
    },
    {
      section: 'certification',
      iconColor: 'purple',
      details: {
        info: 'Excellence Awards',
        from: 'Deloitte',
        year: 2025
      }
    }
  ],
  interests: [
    {
      section: 'singing',
      iconColor: 'teal',
      details: {
        info: 'Singing',
        from: 'Classical and Bollywood',
      },
    },
    {
      section: 'sketching',
      iconColor: 'teal',
      details: {
        info: 'Sketching',
        from: 'Portraits & Symbolism'
      },
    },
    {
      section: 'travelling',
      iconColor: 'teal',
      details: {
        info: 'Travelling',
        from: 'Hiking and Outdoor activities'
      },
    },
  ],
}

  