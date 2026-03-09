import * as S from "./Description.style";

type Props = {
  children: React.ReactNode;
};

export const SectionDescription = ({ children }: Props) => {
  return <S.Description>{children}</S.Description>;
};