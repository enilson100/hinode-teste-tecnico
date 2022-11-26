import styled from "styled-components";

export const SectionHeaderFirst = styled.section`
  width: 100vw;
  background-color: var(--gray-0);
  height: 37.79px;
  display: flex;
  justify-content: center;
  opacity: 98%;

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
      width: 14.02px;
      height: 17.13px;
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
      margin-bottom: 2px;
      margin-right: 32px;
    }
  }
`;
