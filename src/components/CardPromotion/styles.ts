import styled from "styled-components";

export const Price = styled.p`
  padding: 2px;
  font-family: var(--font-main);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  text-decoration-line: line-through;
  color: #828282;
`;

export const DivDiscount = styled.div`
  padding: 5px;
  width: 42px;
  height: 28px;
  background: #cf960d;
  position: relative;

  bottom: 155px;
  right: 220px;
  z-index: 1;
  p {
    font-family: var(--font-main);
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: var(--color-white);
  }
`;
