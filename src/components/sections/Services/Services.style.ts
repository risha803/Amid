import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 50px 50px;
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
  gap: 20px;
`;

export const Label = styled.span`
  display: inline-block;
  align-self: flex-start;

  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.primary};

  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;

  padding: 6px 16px;

  margin: 0;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  padding: 0;
  margin: 0;

  max-width: 520px;
`;

export const Description = styled.p`
padding: 72px 0;
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 460px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px 30px;
  border-radius: 20px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
  }
`;

export const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.lightBg};
  border-radius: 16px;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
`;

export const LearnMore = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;