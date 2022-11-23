import styled from "styled-components";

export const SectionFooterFirst = styled.section`
  width: 100vw;
  height: 117px;
  background-color: #f5f6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 80%;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      gap: 7px;
      height: 46px;

      p {
        display: flex;
        flex-direction: column;
        font-family: var(--font-main);
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        text-align: start;
      }
    }
    .icon-card {
      width: 25px;
      height: 20.01px;
      color: var(--gray-1);
      margin-top: 3px;
    }
    .icon-truck {
      width: 28.42px;
      height: 22.39px;
      color: var(--gray-1);
    }
    .icon-swap {
      width: 22px;
      height: 22px;
      color: var(--gray-1);
      margin-top: 2px;
    }
    .icon-dropbox {
      width: 23.63px;
      height: 20.2px;
      color: var(--gray-1);
      margin-top: 3px;
    }
  }
`;
