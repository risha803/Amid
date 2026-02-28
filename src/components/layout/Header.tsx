import styled from "styled-components";
import { Container } from "./Container";
import { Button } from "../ui/Button";

const Wrapper = styled.header`
  padding: 24px 0;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;

  a {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.textLight};
    transition: 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Logo>amid<span>.</span></Logo>

          <Nav>
            <a href="#">About amid</a>
            <a href="#">Features</a>
            <a href="#">Portfolio</a>
            <a href="#">Reviews</a>
          </Nav>

          <Button variant="primary">Login</Button>
        </Inner>
      </Container>
    </Wrapper>
  );
};