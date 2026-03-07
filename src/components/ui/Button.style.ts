import styled from "styled-components";

export const ButtonSection = styled.a<{ arrowUrl: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  cursor: pointer;

  width: 203px;
  height: 57px;


  font-size: 18px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.lightBg};
  border-radius: 20px;
  text-decoration: none;
  position: relative;

  transition: all 0.3s ease;

  &::after {
    content: "";
    width: 16px;
    height: 16px;

    position: absolute;
    right: 40px;

    background: url(${({ arrowUrl }) => arrowUrl}) no-repeat center;
    background-size: contain;

    transition: all 0.3s ease;
  }

  &:hover,
  &:focus {
    padding: 18px 63px 18px 39px;
    background-color: #ff7439;
    color: #ffffff;
  }

  &:active {
    background-color: #124F48;
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    background-image: url("/img/icon/white_arrow.svg");
  }
`;