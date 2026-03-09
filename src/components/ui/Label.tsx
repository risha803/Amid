import * as S from "./Label.style";

type Props = {
  children: React.ReactNode;
};

export const SectionLabel = ({ children }: Props) => {
  return <S.Label>{children}</S.Label>;
};