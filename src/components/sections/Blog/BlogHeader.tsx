import * as S from "./Blog.style";
import { SectionLabel } from "../../ui/Label";
import { SectionTitle } from "../../ui/Title";
import { SectionDescription } from "../../ui/Description";

export const BlogHeader = () => {
  return (
    <S.Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SectionLabel>blog</SectionLabel>
      </div>
      <SectionTitle>
        We Publish Blogs Every Week
      </SectionTitle>

      <SectionDescription>
        We understand how desperately you want to grow in the business world & our motto is to help you with practical idea and plan
      </SectionDescription>
    </S.Header>
  );
};