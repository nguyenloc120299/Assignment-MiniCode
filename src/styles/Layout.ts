import styled from "styled-components";
import { ContainerType } from "./types/LayoutType";

export const Container = styled.div<ContainerType>`
  max-width: ${({ maxWidth }) => maxWidth || 1370}px;
  width: 100%;
  margin: auto;
  padding: 10px;
`;
