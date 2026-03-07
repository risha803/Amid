import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 120px 0 80px 0;
`;

export const HeaderBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 80px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Label = styled.span`
  display: inline-block;
  align-self: flex-start;
  font-size: 14px;
  font-weight: 500;
  color: #FF6107;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 6px 16px;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 900;
  line-height: 58px;
  margin: 0;
  max-width: 520px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 460px;
  margin: 0;
  margin-top: 72px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

export const Card = styled.div`
  height: 415px;
  background: transparent;
  padding: 50px 0 45px 0;
  border-radius: 20px;
  text-align: left;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    padding: 50px 0 45px 34px;
    background: ${({ theme }) => theme.colors.lightBg};
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.div<{ $bg: string }>`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: ${({ $bg }) => $bg};
  margin-bottom: 30px;

  &.icon-wrapper img {
    width: 32px;
    height: 32px;
    transition: filter 0.3s ease;
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textDark};
  margin: 0;
  transition: color 0.3s ease;
`;

export const CardDescription = styled.p`
  width: 350px;
  margin-top: 20px;
  margin-bottom: 28px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  transition: color 0.3s ease;
`;