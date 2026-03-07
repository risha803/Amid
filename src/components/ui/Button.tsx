import * as S from "./Button.style";

import arrow from "../../assets/img/green-arrow.svg";

type Props = {
  children: React.ReactNode;
  href?: string;
};

export const Button = ({ children, href = "#" }: Props) => {
  return (
    <S.ButtonSection href={href} arrowUrl={arrow}>
      {children}
    </S.ButtonSection>
  );
};