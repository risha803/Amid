import * as S from "./Blog.style";
import { Container } from "../../layout/Container";

import { blogs } from "./Blog.data";
import { BlogCard } from "./BlogCard";
import { BlogHeader } from "./BlogHeader";

export const Blog = () => {
  return (
    <S.Wrapper>
      <Container>

        <BlogHeader />

        <S.Grid>
          {blogs.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </S.Grid>

      </Container>
    </S.Wrapper>
  );
};