import styled from "styled-components";

export const TitleListStyle = styled.div`
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: flex-end;
  width: 1109px;
  margin-bottom: 40px;
  .div-wrap-title {
    width: 63%;
    display: flex;
    justify-content: space-between;
  }
  .div-wrap-title-new {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  h1 {
    font-family: var(--font-secondary);
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    letter-spacing: 3px;
    color: var(--color-black);
    text-align: center;
  }
  div {
    cursor: pointer;
    .div-end {
      display: flex;
      align-items: center;
      gap: 5px;

      /* left: 630px; */
      margin-top: 40px;
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

      text-decoration-line: underline;

      color: var(--gray-1);
    }
  }
`;
