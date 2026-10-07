import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid #ececec;
  margin-bottom: 20px;

  nav {
    display: flex;
    gap: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  text-decoration: none;

  &.active {
    color: #e50914;
  }
`;
