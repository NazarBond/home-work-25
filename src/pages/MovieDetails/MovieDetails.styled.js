import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 12px;
  background-color: #eee;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
`;

export const MovieContainer = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
`;
