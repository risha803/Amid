import ImgLeft from "../../../assets/img/group_left_jobhub.png"
import ImgRight from "../../../assets/img/group_right_cent.png"

export interface Case {
  id: number;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  offset?: boolean;
}

export const cases: Case[] = [
  {
    id: 1,
    title: "JobHub Job Finding Website",
    description:
      "We helped to build a scalable job platform with modern UI and smooth UX for job seekers and companies.",
    image: ImgLeft,
  },
  {
    id: 2,
    title: "Digital Marketing Agency",
    description:
      "A complete redesign of a marketing platform with focus on conversions and performance.",
    image: ImgRight,
    reverse: true,
    offset: true,
  },
];