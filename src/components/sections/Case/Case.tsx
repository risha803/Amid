import * as S from "./Case.style";
import { Container } from "../../layout/Container";
import { cases } from "./Case.data";
import { CaseCard } from "./CaseCard";

export const CaseSection = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.CaseBlock>
          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </S.CaseBlock>
      </Container>
    </S.Wrapper>
  );
};