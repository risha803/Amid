import * as S from "./Title.style";

type Props = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: Props) => {
  return <S.Title>{children}</S.Title>;
};