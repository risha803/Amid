import img1 from "../../../assets/img/left_image.jpg";
import img2 from "../../../assets/img/right_image.jpg";

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Upgrowing Economy Needs More Startups",
    description:
      "We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan",
    image: img1,
    date: "22 Dec",
  },
  {
    id: 2,
    title: "Team Has Some Unique Feature - What Yours?",
    description:
      "We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan",
    image: img2,
    date: "16 Dec",
  },
];