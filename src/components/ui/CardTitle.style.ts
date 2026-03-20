import styled from "styled-components";

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0;
  transition: color 0.3s ease;
`;