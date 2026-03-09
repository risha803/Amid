import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 80px 0;
`;

export const Header = styled.div`
  max-width: 540px;
  margin-bottom: 140px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
`;

export const StatsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;

export const StatValue = styled.div`
  font-size: 36px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
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