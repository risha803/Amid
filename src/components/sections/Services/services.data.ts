export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  iconBg: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "/img/icon/card_icon.svg",
    title: "Business Growing Support",
    description: "Get every necessary support to grow as business startup",
    iconBg: "#E8F7F1",
  },
  {
    id: 2,
    icon: "/img/icon/clip_icon.svg",
    title: "Community Attachment",
    description: "A lifetime attachment with the community dreamer",
    iconBg: "#FFF4E5",
  },
  {
    id: 3,
    icon: "/img/icon/circle_icon.svg",
    title: "Exceptional Discovery Plans",
    description: "An exceptional plan can take you ahead millions of step which we discover",
    iconBg: "#FFECEE",
  },
];