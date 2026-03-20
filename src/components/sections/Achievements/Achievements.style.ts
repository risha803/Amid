import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 120px 0;
`;

export const Header = styled.div`
  max-width: 520px;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 108px;
`;

export const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StatItem = styled.div<{
  $visible: boolean;
  $delay: number;
}>`
  display: grid;
  grid-template-columns: 120px 1fr 1fr;
  align-items: center;
  gap: 30px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(30px)"};

  transition: 
    opacity 0.6s ease,
    transform 0.6s ease;

  transition-delay: ${({ $delay }) => $delay * 0.15}s;

  &:hover {
    transform: translateY(0) translateX(6px);
  }
`;

export const StatValue = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.37;
  min-width: 120px;
`;

export const StatText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StatLabel = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const StatDescription = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
`;