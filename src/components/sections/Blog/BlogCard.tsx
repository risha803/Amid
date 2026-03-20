import * as S from "./Blog.style";
import type { BlogItem } from "./Blog.data";

import { Button } from "../../ui/Button";

type Props = {
  item: BlogItem;
};

export const BlogCard = ({ item }: Props) => {
  const { title, description, image, date } = item;

  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={image} alt={title} />

        <S.DateBadge>
          {date}
        </S.DateBadge>
      </S.ImageWrapper>

      <S.CardTitle>
        {title}
      </S.CardTitle>

      <S.CardDescription>
        {description}
      </S.CardDescription>

      <Button>
        Learn More
      </Button>
    </S.Card>
  );
};