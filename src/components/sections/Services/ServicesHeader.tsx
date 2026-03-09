import * as S from "./Services.style";
import { SectionLabel } from "../../ui/Label";
import { SectionTitle } from "../../ui/Title";
import { SectionDescription } from "../../ui/Description";

export const ServicesHeader = () => {
  return (
    <S.HeaderBlock>
      <S.HeaderLeft>
        <SectionLabel>services</SectionLabel>

        <SectionTitle>
          Exactly Everything You Need For Business
        </SectionTitle>
      </S.HeaderLeft>

      <SectionDescription>
        We understand how desperately you want to grow in the business world
        & our motto is to help you with practical idea and plan
      </SectionDescription>
    </S.HeaderBlock>
  );
};