import styled from "styled-components";

interface CardProps {
  delay?: number;
}

export const Wrapper = styled.section`
  padding: 80px 0;
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 255px);
  grid-template-rows: repeat(2, 103px);
  gap: 30px;
`;

export const Card = styled.button<CardProps>`
  width: 255px;
  height: 103px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: translateY(20px);

  animation: fadeIn 0.6s ease forwards;
  animation-delay: ${({ delay = 0 }) => delay}ms;

  transition: 
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background-color 0.25s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    background-color: rgba(255, 255, 255, 1);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 
      0 0 0 3px ${({ theme }) => theme.colors.primary},
      0 15px 40px rgba(0, 0, 0, 0.08);
  }

  img {
    max-width: 140px;
    max-height: 50px;
    object-fit: contain;
    pointer-events: none;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;