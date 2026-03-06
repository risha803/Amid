import * as S from "./Services.style";
import type { Service } from "./services.data";

type Props = {
  service: Service;
};

export const ServiceCard = ({ service }: Props) => {
  const { icon, title, description } = service;

  return (
    <S.Card>
      <S.IconWrapper>
        <img src={icon} alt={title} />
      </S.IconWrapper>

      <S.CardTitle>{title}</S.CardTitle>

      <S.CardDescription>
        {description}
      </S.CardDescription>

      <S.LearnMore href="#">
        Learn More →
      </S.LearnMore>
    </S.Card>
  );
};