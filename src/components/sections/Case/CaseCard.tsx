import * as S from "../Case/Case.style"
import type { Case } from "./Case.data";

import { CardTitle } from "../../ui/CardTitle";
import { SectionDescription } from "../../ui/Description";
import { Button } from "../../ui/Button";

type Props = {
  item: Case;
};

export const CaseCard = ({ item }: Props) => {
  const { title, description, image, reverse, offset } = item;

  return (
    <S.Card $reverse={reverse} $offset={offset}>
      
      <S.ImageWrapper>
        <img src={image} alt={title} />
      </S.ImageWrapper>

      <S.Content>
        <CardTitle>{title}</CardTitle>

        <SectionDescription>
          {description}
        </SectionDescription>

        <Button>
          View Case
        </Button>
      </S.Content>

    </S.Card>
  );
};