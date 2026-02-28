import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.lightBg || "#f5f7f6"};
  padding: 120px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  max-width: 540px;
`;

export const Tag = styled.span`
  display: inline-block;
  background: #ffe7db;
  color: ${({ theme }) => theme.colors.accent};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
`;

export const Description = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.textLight || "#888"};
  line-height: 1.6;
`;

export const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Demo = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textDark || "#333"};
`;

/* ================= RIGHT BLOCK ================= */

export const Right = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
`;

export const BigCircle = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Lines = styled.img`
  position: absolute;
  width: 480px;
  top: 20px;
  left: 20px;
  z-index: 2;
`;

export const Women = styled.img`
  position: absolute;
  bottom: 0;
  left: 70px;
  width: 380px;
  height: auto;
  z-index: 3;
`;

export const SmallCircles = styled.img`
  position: absolute;
  top: 40px;
  right: -20px;
  width: 120px;
  z-index: 4;
`;

/* =============== Floating Cards =============== */

interface CardProps {
  top: string;
  left: string;
  small?: boolean;
}

export const FloatingCard = styled.div<CardProps>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ small }) => (small ? "120px" : "160px")};
  height: ${({ small }) => (small ? "120px" : "160px")};
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "14px" : "16px")};
`;