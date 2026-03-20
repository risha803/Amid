import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 120px 0;
`;

export const Card = styled.div<{ $reverse?: boolean; $offset?: boolean }>`
  display: grid;
  max-width: 511px;
  grid-template-rows: 600px 171px 57px;
  row-gap: 35px;
  align-items: center;
  margin-top: ${({ $offset }) => ($offset ? "229px" : "0")};
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};
`;

export const Content = styled.div`
  direction: ltr;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ImageWrapper = styled.div`
  width: 511px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
  }
`;

export const CaseBlock = styled.div`
  display: flex;
  gap: 85px;
`