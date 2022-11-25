import styled from "styled-components";

export const TitleListStyle = styled.div`
  display: flex;
  height: 46px;
  justify-content: center;
  width: 1109px;
  margin-bottom: 40px;

  h1 {
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    margin-left: 380px;
    letter-spacing: 3px;
    color: var(--color-black);
    text-align: center;
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
    .div-end {
      margin-left: 350px;
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--gray-1);
    }
    .icon-eyes {
      color: var(--gray-1);
    }
    p {
      font-family: var(--font-main);
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 22px;

      text-align: right;
      text-decoration-line: underline;

      color: var(--gray-1);
    }
  }
`;
