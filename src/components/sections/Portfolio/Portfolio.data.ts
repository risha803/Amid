export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Business Strategy",
    category: "Development",
    image: "/img/portfolio/1.png",
  },
  {
    id: 2,
    title: "Digital Marketing",
    category: "Marketing",
    image: "/img/portfolio/2.png",
  },
  {
    id: 3,
    title: "UI/UX Design",
    category: "Design",
    image: "/img/portfolio/3.png",
  },
];