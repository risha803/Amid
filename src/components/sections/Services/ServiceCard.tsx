import * as S from "./Services.style";
import type { Service } from "./services.data";
import { Button } from "../../ui/Button"
import { CardTitle } from "../../ui/CardTitle";

type Props = {
  service: Service;
};

export const ServiceCard = ({ service }: Props) => {
  const { icon, title, description, iconBg } = service;

  return (
    <S.Card>
      <S.IconWrapper $bg={iconBg} className="icon-wrapper">
        <img src={icon} alt={title} />
      </S.IconWrapper>

      <CardTitle>{title}</CardTitle>

      <S.CardDescription>{description}</S.CardDescription>

      <Button>
        Learn More
      </Button>
    </S.Card>
  );
};