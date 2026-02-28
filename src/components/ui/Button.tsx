import styled, { css } from "styled-components";

interface Props {
  variant?: "primary" | "accent";
}

export const Button = styled.button<Props>`
  padding: 12px 26px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  transition: 0.2s;

  ${({ theme, variant = "primary" }) =>
    variant === "primary"
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `
      : css`
          background: ${theme.colors.accent};
          color: ${theme.colors.white};
        `}

  &:hover {
    opacity: 0.9;
  }
`;