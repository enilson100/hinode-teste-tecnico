import styled from "styled-components";

export const DivHeaderFirst = styled.div`
  width: 100vw;
  background-color: var(--gray-0);
  height: 37.79px;
  display: flex;
  justify-content: center;

  .div-wrap {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .paragraph-header {
    font-family: var(--font-main);
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    color: var(--gray-1);
  }
  .div-rigth {
    display: flex;
  }

  .div-icon {
    display: flex;
    align-items: center;

    .icon-user-heart {
      width: 12.02px;
      height: 14.13px;
      color: var(--color-black);
    }
    p {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 10px;

      color: var(--gray-1);
      line-height: 22px;
      margin-left: 5px;
      text-decoration-line: underline;
      padding: 0px 4px;
      margin-right: 32px;
    }
  }
`;
