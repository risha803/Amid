import * as S from "./Companies.styles";
import { Container } from "../../layout/Container";
import { companies } from "./companies.data";

export const Companies = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Grid>
          {companies.map((company) => (
            <S.Card key={company.id}>
              <img src={company.src} alt={company.alt} />
            </S.Card>
          ))}
        </S.Grid>
      </Container>
    </S.Wrapper>
  );
};