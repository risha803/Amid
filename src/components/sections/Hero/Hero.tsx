import * as S from "../Hero/Hero.styles";
import { Container } from "../../layout/Container";
import { Button } from "../../ui/Button";

import WomenImg from "../../../assets/img/women_hero.png";

export const Hero = () => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Left>
            <S.Tag>It works!</S.Tag>

            <S.Title>
              Try Our Business Ideas to grow Rapidly
            </S.Title>

            <S.Description>
              We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan
            </S.Description>

            <S.Buttons>
              <Button variant="accent">Get Started</Button>
              <S.Demo>Demo Video</S.Demo>
            </S.Buttons>
          </S.Left>

          <S.Right>
            <S.BigCircle src="/img/hero/circle_hero.svg" alt="" />
            <S.Lines src="/img/hero/lines_hero.svg" alt="" />
            <S.Women src={WomenImg} alt="women" />
            <S.SmallCircles src="/img/hero/circles_hero.svg" alt="" />

            <S.FloatingCard top="40px" left="-40px">Card 1</S.FloatingCard>
            <S.FloatingCard top="320px" left="300px" small>Card 2</S.FloatingCard>
          </S.Right>
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};