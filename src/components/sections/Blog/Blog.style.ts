import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 120px 0;
  
`;

export const Header = styled.div`
  max-width: 700px;
  margin: 0 auto 84px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  gap: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
`;

export const Card = styled.div`
  padding: 30px 30px 20px 30px;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;

  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBg};
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  }

  &:hover h3 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 460px;
    height: auto;
    border-radius: 20px;
    margin-bottom: 45px;
  }
`;

export const DateBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  background: #124F48;
  color: #fff;

  padding: 6px 10px;
  border-radius: 6px;

  font-size: 14px;
  font-weight: 600;
`;

export const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 35px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
  max-width: 496px;
  margin-bottom: 45px;
`;