export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "/img/icon/card_icon.svg",
    title: "Business Planning",
    description: "We help you plan and structure your business ideas effectively.",
  },
  {
    id: 2,
    icon: "/img/icon/suitcase_icon.svg",
    title: "Financial Strategy",
    description: "Smart financial solutions to grow your business sustainably.",
  },
  {
    id: 3,
    icon: "/img/icon/diagramma_icon.svg",
    title: "Market Analysis",
    description: "We analyze your market and provide actionable insights.",
  },
];