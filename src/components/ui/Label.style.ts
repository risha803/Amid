import styled from "styled-components";

export const Label = styled.span`
  display: inline-block;
  align-self: flex-start;

  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.primary};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  padding: 6px 16px;
`;