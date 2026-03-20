import * as S from "./Achievements.style";
import { Container } from "../../layout/Container";

import { SectionLabel } from "../../ui/Label";
import { SectionTitle } from "../../ui/Title";

import { StatsList } from "./StatsList";

export const Achievements = () => {
  return (
    <S.Wrapper>

      <Container>
        <S.Content>
          <S.Header>
            <SectionLabel>
              achievements
            </SectionLabel>

            <SectionTitle>
              We Worked With 100+ Company Over 10 Years
            </SectionTitle>
          </S.Header>
          <StatsList />
        </S.Content>
      </Container>

    </S.Wrapper>
  );
};